import Header from "../myblogPage/myblogItems/Header";
import * as S from "./styles/CreatepostCss";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import { EditorState } from "draft-js";

export default function CreatePost() {
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: EditorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  return (
    <>
      <S.TemporaryBox>임시 저장 불러오기</S.TemporaryBox>
      <S.NewPostInputContainer>
        <S.TitleInputBox>
          <S.TitleInput placeholder="제목을 입력하세요." />
        </S.TitleInputBox>
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
      <S.ButtonBox>
        <S.CancelButton>취소</S.CancelButton>
        <S.TemporaryButton>임시저장</S.TemporaryButton>
        <S.PostButton>게시</S.PostButton>
      </S.ButtonBox>
    </>
  );
}
