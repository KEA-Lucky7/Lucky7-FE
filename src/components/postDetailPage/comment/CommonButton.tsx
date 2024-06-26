// import React from 'react';

import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  className: string;
  onClick?: () => void;
  children?: ReactNode;
};

const CommonButton = ({ className, onClick, children }: ButtonProps) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default CommonButton;

const ButtonWrapper = styled.button`
  display: flex;
  outline: none;
  align-items: center;
  border-radius: 20px;
`;