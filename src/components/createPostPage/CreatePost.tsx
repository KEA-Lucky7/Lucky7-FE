import * as S from "./styles/CreatepostCss";
import React, { useState, ChangeEvent } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import postDetailbackground from "../../assets/postDetail/postDetailbackground.png";

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
  }

  const handleAddSubTag = () => {
    if (subtagInput.trim() !== "" && subtags.length < 10) {
      const newSubTag: SubTag = {
        id: subtags.length + 1,
        name: subtagInput.trim(),
      };
      setSubtags([...subtags, newSubTag]);
      setSubtagInput("");
    }
  }


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


  return (
    <>
      {/* 헤더 컴포넌트 여기로 옮겨야 작성하기 API연동할때 편함 */}
      <S.Picturecontainer imageUrl={backgroundImageUrl}>
        <S.TitleContainer>
          <S.SubTitleBox onChange={(e) => handleSelectCategory(e.target.value as PostCategory)}>
            <select>
              <option value="">게시판을 선택해주세요</option>
              <option value={PostCategory.자유글}>자유글</option>
              <option value={PostCategory.가계부}>가계부</option>
            </select>
            {/* <img src={selectPost} alt='선택' style={{ width: '14px', height: '6px', marginLeft: '5px' }} /> */}
          </S.SubTitleBox>
          <S.TitleInput placeholder="제목을 입력하세요." style={{ fontSize: '24px' }} />
        </S.TitleContainer>
      </S.Picturecontainer>
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
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
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
        </S.TextEditBox>
      </S.NewPostInputContainer>


      {/* 대표태그 input */}
      <S.TagBox>
        <S.RepresentativeTagBox>
          <S.RepresentativeTagTitle>
            대표태그
          </S.RepresentativeTagTitle>
          <S.RepresentativeTagInputBox>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
              <S.TagInput
                type="text"
                placeholder="대표 태그를 입력해주세요(최대 5개)" //최대 5개 희망함
                value={tagInput}
                onChange={handleTagInputChange}
              />
              <S.CreateTag onClick={handleAddTag}>추가</S.CreateTag>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '15px', }}>
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

      {/* 서브태그 input 자리 */}
      <S.TagBox>
        <S.RepresentativeSubTagBox>
          <S.RepresentativeTagTitle>태그</S.RepresentativeTagTitle>
          <S.RepresentativeTagInputBox>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
              <S.TagInput
                type="text"
                placeholder="세부 태그를 입력해주세요(최대 10개)" //최대 10개 희망함
                value={subtagInput}
                onChange={handleSubTagInputChange}
              />
              <S.CreateTag onClick={handleAddSubTag}>추가</S.CreateTag>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '15px', overflowX: 'hidden' }}>
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
