import * as S from "./styles/CreatepostCss";
import { useState, ChangeEvent } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import postDetailbackground from "../../assets/postDetail/postDetailbackground.png";
import changebackgrounimage from "../../assets/createPost/changebackgrounimage.png";
import axios from "axios";
import Menu from "../../assets/header/Menu.png";
import moaboa from "../../assets/header/moaboa.png";
import { useNavigate } from "react-router-dom";
import { TemporarySaveModal } from "./createPostItems/TemporarySaveModal";
import Resizer from 'react-image-file-resizer';

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

interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreatePost() {
  const [backgroundImageUrl, setBackgroundImageUrl] =
    useState<string>(postDetailbackground);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [tags, setTags] = useState<Tag[]>([]);
  const [subtags, setSubtags] = useState<SubTag[]>([]);

  const [tagInput, setTagInput] = useState<string>("");
  const [subtagInput, setSubtagInput] = useState<string>("");

  const [postCategory, setPostCategory] = useState<PostCategory | null>(null);

  const [showAccountBookInputs, setShowAccountBookInputs] = useState<boolean>(false); // 입력란을 보여줄지 여부를 나타내는 상태
  const [accountBookInputs, setAccountBookInputs] = useState<{ consumedDate: string, memo: string, amount: number, walletType: string }[]>([]); // 입력된 값들을 저장할 배열 상태
  const [title, setTitle] = useState<string>("");
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [temporarySaves, setTemporarySaves] = useState<string[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const changeSideMenuState = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  function goHomePage() {
    navigate("/");
    setShowSideMenu(false);
  }

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

  // const handleBackgroundImageUrl = () => {
  //   setBackgroundImageUrl("/");
  // };

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
          const maxWidth = 500; // 원하는 최대 너비
          const maxHeight = 400; // 원하는 최대 높이
          let width = img.width;
          let height = img.height;

          // 이미지 비율 유지하면서 최대 크기로 조정
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

  const handleSaveAccountBook = (index: number) => {
    // 해당 입력란의 값들을 가져옵니다.
    const input = accountBookInputs[index];

    // 여기서 입력된 값들을 사용하여 작업을 수행하면 됩니다.
    // 예: API 호출 등
    console.log("저장된 가계부:", input);
  };

  const handleAddAccountBookInput = () => {
    // 입력란을 추가합니다.
    setAccountBookInputs([...accountBookInputs, { consumedDate: "", memo: "", amount: "", walletType: "" }]);
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
    return fetch(url)
      .then(response => response.blob());
  };

  // Function to resize image Blob
  const resizeImage = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        150, // Max width
        150, // Max height
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

  const handleSubmit = async () => {
    const contentRaw = convertToRaw(editorState.getCurrentContent());
    const content = JSON.stringify(contentRaw);
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

    // Console log payload for debugging
    console.log('Payload:', payload);

    try {
      const response = await axios.post('https://vision-necktitude.shop/posts/0', payload);
      console.log('Response:', response.data);
      navigate('/myblog');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
      <S.Header>
        <S.LeftContainer>
          <img
            src={Menu}
            onClick={changeSideMenuState}
            alt="메뉴"
            width={"25px"}
            height={"15px"}
          />

          <img
            src={moaboa}
            onClick={goHomePage}
            alt="로고"
            width={"130px"}
            height={"27px"}
            style={{ marginBottom: "10px", marginLeft: "10px" }}
          />
        </S.LeftContainer>
        <S.RightContainer>
          <S.TemporaryButton onClick={toggleModal}>임시저장&nbsp;|&nbsp;{posts.length}</S.TemporaryButton>
          <S.PostButton onClick={handleSubmit}>저장하기</S.PostButton>
        </S.RightContainer>

        {isModalVisible && (
          <TemporarySaveModal
            temporarySaves={temporarySaves}
            closeModal={toggleModal}
          />
        )}
      </S.Header>
      {/* 빌드간 오류 해결용*/}
      <S.Picturecontainer
        imageUrl={backgroundImageUrl}
      //onClick={handleBackgroundImageUrl}
      >
        <S.TitleContainer>
          <S.SubTitleBox
            // onChange={(e) =>
            //   handleSelectCategory(e.target.value as PostCategory)
            // }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSelectCategory(e.target.value as PostCategory)
            }
          >
            <select>
              <option value="">게시판을 선택해주세요</option>
              <option value={PostCategory.자유글}>자유글</option>
              <option value={PostCategory.가계부}>가계부</option>
            </select>
            {/* <img src={selectPost} alt='선택' style={{ width: '14px', height: '6px', marginLeft: '5px' }} /> */}
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
            // 에디터와 툴바 모두에 적용되는 클래스
            wrapperClassName="wrapper-class"
            // 에디터 주변에 적용된 클래스
            editorClassName="editor"
            // 툴바 주위에 적용된 클래스
            toolbarClassName="toolbar-class"
            // 툴바 설정
            toolbar={{
              // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
              //list: { inDropdown: true },
              //textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: false },
            }}
            placeholder="내용을 작성해주세요."
            // 한국어 설정
            localization={{
              locale: "ko",
            }}
            // 초기값 설정
            editorState={editorState}
            // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
            onEditorStateChange={onEditorStateChange}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* accountBookInputs 상태에 따라 보여줄 내용을 설정합니다. */}
            {accountBookInputs.map((input, index) => (
              <S.InputBox key={index}>
                <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '15px 20px 15px 0px' }}>
                  <S.Input type="text" placeholder="2024-05-31" value={input.consumedDate} onChange={(e) => handleInputChange(index, 'consumedDate', e.target.value)} />
                  <S.Input type="text" placeholder="메모" value={input.memo} onChange={(e) => handleInputChange(index, 'memo', e.target.value)} />
                  <S.Input type="number" placeholder="금액" value={input.amount} onChange={(e) => handleInputChange(index, 'amount', parseInt(e.target.value))} />
                  <S.Input type="text" placeholder="타입" value={input.walletType} onChange={(e) => handleInputChange(index, 'walletType', e.target.value)} />
                </div>
                <div>
                  {/* <button onClick={() => handleSaveAccountBook(index)}>저장</button> */}
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
      {/* 대표태그 input */}
      <S.TagBox>
        <S.RepresentativeTagBox>
          <S.RepresentativeTagTitle>대표태그</S.RepresentativeTagTitle>
          <S.RepresentativeTagInputBox>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <S.TagInput
                type="text"
                placeholder="대표 태그를 입력해주세요(최대 5개)" //최대 5개 희망함
                value={tagInput}
                onChange={handleTagInputChange}
              />
              <S.CreateTag onClick={handleAddTag}>추가</S.CreateTag>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              {tags.map((tag) => (
                <S.TagItem key={tag.id}>
                  #{tag.name}
                  <S.DeleteTagButton onClick={() => handleDeleteTag(tag.id)}>
                    X
                  </S.DeleteTagButton>
                </S.TagItem>
              ))}
            </div>
          </S.RepresentativeTagInputBox>
        </S.RepresentativeTagBox>
      </S.TagBox>

      {/* 서브태그 input 자리 */}
      <S.TagBox>
        <S.RepresentativeSubTagBox>
          <S.RepresentativeTagTitle>태그</S.RepresentativeTagTitle>
          <S.RepresentativeTagInputBox>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <S.TagInput
                type="text"
                placeholder="세부 태그를 입력해주세요(최대 10개)" //최대 10개 희망함
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
                  <S.DeleteTagButton
                    onClick={() => handleDeleteSubTag(subtag.id)}
                  >
                    X
                  </S.DeleteTagButton>
                </S.TagItem>
              ))}
            </div>
          </S.RepresentativeTagInputBox>
        </S.RepresentativeSubTagBox>
      </S.TagBox>
    </>
  );
}
