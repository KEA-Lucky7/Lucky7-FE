import styled from "styled-components";
import InputComment from "./InputComment";
import CommonButton from "./CommonButton"; // 오타 수정: CommomButton -> CommonButton

type InputCommentProps = {
  className: string;
  onClick: () => void;
  placeholder: string;
  postId: number;
  commentId: number; // 추가된 부분
  type: string; // 추가된 부분
};

const InputCommentWithPage = ({
  className,
  onClick,
  placeholder,
  postId,
  commentId,
  type,
}: InputCommentProps) => {
  return (
    <InputCommentWrapper
      className={className}
      placeholder={placeholder}
      onClick={onClick}
      postId={postId}
      commentId={commentId} // 추가된 부분
      type={type} // 추가된 부분
    >
      <InputPageWrapper>
        <span>책 페이지</span>
        <InputPage className="pageInput">
          <input placeholder="숫자 입력" />
          p.
        </InputPage>
      </InputPageWrapper>
    </InputCommentWrapper>
  );
};

export default InputCommentWithPage;

const InputCommentWrapper = styled(InputComment)`
  display: flex;
`;

const InputPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.grey4};
  > span {
    font-size: ${(props) => props.theme.fontSize.body02};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`;

const InputPage = styled(CommonButton)`
  padding: 12px 16px;
  border: 1px solid ${(props) => props.theme.colors.grey4};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.grey1};
  > input {
    width: 66px;
    border: none;
    outline: none;
    &::placeholder {
      font-family: inherit;
      font-size: ${(props) => props.theme.fontSize.badge01};
      font-weight: ${(props) => props.theme.fontWeight.bold};
      color: ${(props) => props.theme.colors.grey1};
    }
  }
`;
