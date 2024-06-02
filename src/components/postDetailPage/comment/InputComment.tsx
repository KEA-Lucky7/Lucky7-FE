import { ReactNode, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CommonButton from "./CommomButton";

type InputProps = {
  className: string;
  placeholder: string;
  postId: number;
  children?: ReactNode;
};

const InputComment = ({
  className,
  placeholder,
  postId,
  children,
}: InputProps) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    axios
      .post(`https://vision-necktitude.shop/posts/${postId}/comment`, {
        content: comment,
      })
      .then((response) => {
        console.log("댓글 제출 성공: ", response.data);
        setComment("");
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
`;

const InputButtonWrapper = styled.div`
  width: 100px;
`;

const InputButton = styled(CommonButton)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 12px 16px;
  background-color: #fff;
  border: none;
  font-size: 18px;
  font-weight: bold;
`;
