import styled from "styled-components";

export const QuizContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 1px solid #aeaeae;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f7f7f7;
  color: #4566e3;
  position: fixed;
  top: 35%;
  right: 12%;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  color: #343434;
`;

export const ImgBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuizTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const AnswerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const AnswerButton = styled.button<{ selected: boolean }>`
  width: 80%;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${({ selected }) => (selected ? "#4566e3" : "#ccc")};
  background-color: #f7f7f7;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ selected }) => (selected ? "#000" : "#666")};

  &:hover {
    background-color: #eaeaea;
  }

  &:active {
    background-color: #dcdcdc;
  }

  &:disabled {
    background-color: #eaeaea;
    color: #999;
    cursor: not-allowed;
  }

  span {
    margin-left: auto;
    margin-right: 10px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 500px;
  z-index: 999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: 100;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4566e3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #3451b1;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;
