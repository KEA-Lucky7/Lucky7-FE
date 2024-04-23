import React, { ReactNode } from 'react';
import styled from 'styled-components';

import CommonButton from './CommomButton';

type InputProps = {
  className: string;
  placeholder: string;
  onClick: () => void;
  children?: ReactNode;
};

const InputComment = ({ className, placeholder, onClick, children }: InputProps) => {
  return (
    <InputWrapper className={className}>
      {children}
      <InputArea placeholder={placeholder} />
      <InputButtonWrapper>
        <InputButton className={className} onClick={onClick}>
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
  border: 1px solid red;
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