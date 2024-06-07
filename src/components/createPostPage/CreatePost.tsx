import * as S from "./styles/CreatepostCss";
import { useState, ChangeEvent, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import postDetailbackground from "../../assets/postDetail/postDetailbackground.png";
import changebackgrounimage from "../../assets/createPost/changebackgrounimage.png";
import axios from "axios";
import moaboa from "../../assets/header/moaboa.png";
import { useNavigate } from "react-router-dom";
import { TemporarySaveModal } from "./createPostItems/TemporarySaveModal";
import Resizer from 'react-image-file-resizer';
import { useStore } from "../homePage/login/state";

interface Tag {
  id: number;
  name: string;
}

interface SubTag {
  id: number;
  name: string;
}

enum PostCategory {
  자유글 = "자유글",
  가계부 = "가계부",
}

export default function CreatePost() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>(postDetailbackground);
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const [tags, setTags] = useState<Tag[]>([]);
  const [subtags, setSubtags] = useState<SubTag[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [subtagInput, setSubtagInput] = useState<string>("");
  const [postCategory, setPostCategory] = useState<PostCategory | null>(null);
  const [accountBookInputs, setAccountBookInputs] = useState<{ consumedDate: string, memo: string, amount: number, walletType: string }[]>([]);
  const [title, setTitle] = useState<string>("");
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [posts, setPosts] = useState<any[]>([]);
  const { accessToken } = useStore();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const handleTagInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleSubTagInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubtagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "" && tags.length < 5) {
      const newTag: Tag = {
        id: tags.length + 1,
        name: tagInput.trim(),
      };
      setTags([...tags, newTag]);
      setTagInput("");
    }
  };

  const handleAddSubTag = () => {
    if (subtagInput.trim() !== "" && subtags.length < 10) {
      const newSubTag: SubTag = {
        id: subtags.length + 1,
        name: subtagInput.trim(),
      };
      setSubtags([...subtags, newSubTag]);
      setSubtagInput("");
    }
  };

  const handleDeleteTag = (id: number) => {
    const updatedTags = tags.filter((tag) => tag.id !== id);
    setTags(updatedTags);
  };

  const handleDeleteSubTag = (id: number) => {
    const updatedSubTags = subtags.filter((subtag) => subtag.id !== id);
    setSubtags(updatedSubTags);
  };

  const handleSelectCategory = (category: PostCategory) => {
    setPostCategory(category);
  };

  const handleClickImageIcon = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          const maxWidth = 500;
          const maxHeight = 400;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          setBackgroundImageUrl(canvas.toDataURL('image/png'));
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddAccountBookInput = () => {
    setAccountBookInputs([...accountBookInputs, { consumedDate: "", memo: "", amount: 0, walletType: "" }]);
  };

  const handleInputChange = (index: number, key: string, value: string | number) => {
    const updatedInputs = [...accountBookInputs];
    (updatedInputs[index] as any)[key] = value;
    setAccountBookInputs(updatedInputs);
  };

  const handleDeleteAccountBookInput = (index: number) => {
    const updatedInputs = [...accountBookInputs];
    updatedInputs.splice(index, 1);
    setAccountBookInputs(updatedInputs);
  };

  const urlToBlob = (url: string): Promise<Blob> => {
    return fetch(url).then(response => response.blob());
  };

  const resizeImage = (file: Blob): Promise<string> => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        150,
        150,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri as string);
        },
        'base64'
      );
    });
  };

  const extractTextFromEditorState = (editorState: EditorState): string => {
    const contentRaw = convertToRaw(editorState.getCurrentContent());
    const blocks = contentRaw.blocks;
    const text = blocks.map(block => block.text).join('\n');
    return text;
  };

  // 글작성 API
  const handleSubmit = async () => {
    const content = extractTextFromEditorState(editorState);
    const preview = content.slice(0, 50);
    const postType = postCategory === '자유글' ? 'FREE' : 'WALLET';

    let resizedThumbnail: string = '';

    try {
      const imageBlob = await urlToBlob(backgroundImageUrl);
      resizedThumbnail = await resizeImage(imageBlob);
    } catch (error) {
      console.error('Error resizing image:', error);
    }

    const payload = {
      title,
      content,
      preview,
      thumbnail: resizedThumbnail,
      mainHashtag: tags.length > 0 ? tags[0].name : '',
      postType,
      hashtagList: subtags.map(tag => tag.name),
      walletList: accountBookInputs,
    };

    console.log('Payload:', payload);
    console.log(accountBookInputs);

    try {
      const response = await axios.post(`${serverUrl}/posts/0`, payload, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      console.log('Response:', response.data);
      alert('글 작성이 완료 되었습니다.');
      navigate('/myblog');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  // 글 임시저장 API
  const handleTemporarySubmit = async () => {
    const content = extractTextFromEditorState(editorState);
    const preview = content.slice(0, 50);
    const postType = postCategory === '자유글' ? 'FREE' : 'WALLET';

    let resizedThumbnail: string = '';

    try {
      const imageBlob = await urlToBlob(backgroundImageUrl);
      resizedThumbnail = await resizeImage(imageBlob);
    } catch (error) {
      console.error('Error resizing image:', error);
    }

    const payload = {
      title,
      content,
      preview,
      thumbnail: resizedThumbnail,
      mainHashtag: tags.length > 0 ? tags[0].name : '',
      postType,
      hashtagList: subtags.map(tag => tag.name),
      walletList: accountBookInputs,
    };

    console.log('Payload:', payload);

    try {
      const response = await axios.post(`${serverUrl}/posts/temp/0`, payload, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      console.log('Response:', response.data);
      const { postId } = response.data; // Get postId from response
      // Fetch the temporary post after saving it
      handlePostSelect(postId);
      console.log(postId);// postId 찍히는거 확인함.
      alert('임시 저장이 완료 되었습니다.');
      location.reload();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handlePostSelect = async (postId: number) => {
    try {
      const response = await fetch(`${serverUrl}/posts/temp/${postId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      setTitle(data.title);
      setEditorState(EditorState.createWithContent(stateFromHTML(data.content)));
      setTags(data.hashtagList.slice(0, 1).map((tag: string, index: number) => ({ id: index + 1, name: tag }))); // 메인 해시태그
      setSubtags(data.hashtagList.slice(1).map((tag: string, index: number) => ({ id: index + 1, name: tag }))); // 서브 해시태그
      setAccountBookInputs(data.walletList);
      setPostCategory(data.postType === "소비 일기" ? PostCategory.가계부 : PostCategory.자유글);
    } catch (error) {
      console.error('Error fetching temporary post:', error);
    }
  };

  useEffect(() => {
    const fetchTemporaryPosts = async () => {
      try {
        const response = await fetch(`${serverUrl}/posts/temp-list`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching temporary posts:', error);
      }
    };

    fetchTemporaryPosts();
  }, []);

  return (
    <>
      <S.Header>
        <S.LeftContainer>
          <img
            src={moaboa}
            onClick={() => {
              navigate("/");
              setIsModalVisible(false);
            }}
            alt="로고"
            width={"130px"}
            height={"27px"}
            style={{ marginBottom: "10px", marginLeft: "10px" }}
          />
        </S.LeftContainer>
        <S.RightContainer>
          <S.TemporaryButton>
            <div onClick={handleTemporarySubmit}>임시저장</div>
            <div onClick={toggleModal}>&nbsp;|&nbsp;{posts.length}</div>
          </S.TemporaryButton>
          <S.PostButton onClick={handleSubmit}>저장하기</S.PostButton>
        </S.RightContainer>

        {isModalVisible && (
          <TemporarySaveModal
            closeModal={toggleModal}
            onPostSelect={handlePostSelect} // Pass handlePostSelect to TemporarySaveModal
          />
        )}
      </S.Header>
      <S.Picturecontainer
        imageUrl={backgroundImageUrl}
      >
        <S.TitleContainer>
          <S.SubTitleBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSelectCategory(e.target.value as PostCategory)
            }
          >
            <select>
              <option value="">게시판을 선택해주세요</option>
              <option value={PostCategory.자유글}>자유글</option>
              <option value={PostCategory.가계부}>가계부</option>
            </select>
          </S.SubTitleBox>
          <S.TitleInput
            placeholder="제목을 입력하세요."
            style={{ fontSize: "24px", color: 'white' }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.TitleContainer>
        <S.ChangeImageBox>
          <img
            src={changebackgrounimage}
            alt="배경화면"
            style={{ width: "20px", height: "16px" }}
            onClick={handleClickImageIcon}
          />
        </S.ChangeImageBox>
      </S.Picturecontainer>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <S.NewPostInputContainer>
        <S.TextEditBox>
          <Editor
            wrapperClassName="wrapper-class"
            editorClassName="editor"
            toolbarClassName="toolbar-class"
            toolbar={{
              link: { inDropdown: true },
              history: { inDropdown: false },
            }}
            placeholder="내용을 작성해주세요."
            localization={{
              locale: "ko",
            }}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {accountBookInputs.map((input, index) => (
              <S.InputBox key={index}>
                <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '15px 20px 15px 0px' }}>
                  <S.Input type="text" placeholder="2024.05.31" value={input.consumedDate} onChange={(e) => handleInputChange(index, 'consumedDate', e.target.value)} />
                  <S.Input type="text" placeholder="메모" value={input.memo} onChange={(e) => handleInputChange(index, 'memo', e.target.value)} />
                  <S.Input type="number" placeholder="금액" value={input.amount} onChange={(e) => handleInputChange(index, 'amount', parseInt(e.target.value))} />
                  <select value={input.walletType} onChange={(e) => handleInputChange(index, 'walletType', e.target.value)}>
                    <option value="">타입 선택</option>
                    <option value="FOOD">FOOD</option>
                    <option value="TRAFFIC">TRAFFIC</option>
                    <option value="LEISURE">LEISURE</option>
                    <option value="EDUCATION">EDUCATION</option>
                    <option value="LIFE">LIFE</option>
                    <option value="FINANCE">FINANCE</option>
                  </select>
                </div>
                <div>
                  <S.DeleteButton onClick={() => handleDeleteAccountBookInput(index)}>삭제</S.DeleteButton>
                </div>
              </S.InputBox>
            ))}
          </div>
        </S.TextEditBox>
      </S.NewPostInputContainer>

      <S.AccountBookContainer onClick={handleAddAccountBookInput}>
        가계부 생성하기
      </S.AccountBookContainer>
      <S.TagBox>
        <S.RepresentativeTagBox>
          <S.RepresentativeTagTitle>대표태그</S.RepresentativeTagTitle>
          <S.RepresentativeTagInputBox>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <S.TagInput
                type="text"
                placeholder="대표 태그를 입력해주세요(최대 1개)"
                value={tagInput}
                onChange={handleTagInputChange}
              />
              <S.CreateTag onClick={handleAddTag}>추가</S.CreateTag>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              {tags.map((tag) => (
                <S.TagItem key={tag.id}>
                  #{tag.name}
                  <S.DeleteTagButton onClick={() => handleDeleteTag(tag.id)}>X</S.DeleteTagButton>
                </S.TagItem>
              ))}
            </div>
          </S.RepresentativeTagInputBox>
        </S.RepresentativeTagBox>
      </S.TagBox>

      <S.TagBox>
        <S.RepresentativeSubTagBox>
          <S.RepresentativeTagTitle>태그</S.RepresentativeTagTitle>
          <S.RepresentativeTagInputBox>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <S.TagInput
                type="text"
                placeholder="세부 태그를 입력해주세요(최대 5개)"
                value={subtagInput}
                onChange={handleSubTagInputChange}
              />
              <S.CreateTag onClick={handleAddSubTag}>추가</S.CreateTag>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                overflowX: "hidden",
              }}
            >
              {subtags.map((subtag) => (
                <S.TagItem key={subtag.id}>
                  #{subtag.name}
                  <S.DeleteTagButton onClick={() => handleDeleteSubTag(subtag.id)}>X</S.DeleteTagButton>
                </S.TagItem>
              ))}
            </div>
          </S.RepresentativeTagInputBox>
        </S.RepresentativeSubTagBox>
      </S.TagBox>
    </>
  );
}