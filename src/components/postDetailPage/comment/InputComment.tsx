import React, { ReactNode, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CommonButton from "./CommomButton";
import { useStore } from "../../homePage/login/state";

type InputProps = {
  className: string;
  placeholder: string;
  postId: number;
  commentId: number;
  type: string;
  children?: ReactNode;
  onClick?: () => void;
};

const InputComment = ({
  className,
  placeholder,
  postId,
  commentId,
  type,
  children,
  onClick,
}: InputProps) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const { accessToken } = useStore();
  const [comment, setComment] = useState("");
  const [commentType] = useState(type)

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => { 
    var url = "";
    if (commentType == "comment") {
      url = `${serverUrl}/posts/${postId}/comment`
    }
    else {
      url = `${serverUrl}/posts/${postId}/comment/${commentId}/reply`
    }
    axios.post( url,  
    {
      content: comment, 
    }, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }}).then((response) => {
      console.log(url)
      console.log("댓글 제출 성공: ", response.data);
      setComment("");
      window.alert("댓글을 작성하였습니다.")
      location.reload()
      if (onClick) {
        onClick(); 
      }
    })
    .catch((error) => {
      console.error("댓글 제출 실패: ", error);
    });
  };

  return (
    <InputWrapper className={className}>
      {children}
      <InputArea
        placeholder={placeholder}
        value={comment}
        onChange={handleCommentChange}
      />
      <InputButtonWrapper>
        <InputButton className={className} onClick={handleCommentSubmit}>
          댓글등록
        </InputButton>
      </InputButtonWrapper>
    </InputWrapper>
  );
};

export default InputComment;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 110px;
  padding: 20px;
  border: grey;
  border-radius: 8px;
  position: relative;
  box-sizing: border-box;
  border: 1px solid black;
  margin-top: 10px;
`;

const InputArea = styled.textarea`
  flex: 1;
  display: block;
  min-height: 70px;
  resize: none;
  outline: none;
  border: none;
  overflow-y: visible;
  background-color: #fffef9;
`;

const InputButtonWrapper = styled.div`
  width: 100px;
`;

const InputButton = styled(CommonButton)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 12px 16px;
  background-color: #fffef9;
  border: none;
  font-size: 18px;
  font-weight: bold;
`;