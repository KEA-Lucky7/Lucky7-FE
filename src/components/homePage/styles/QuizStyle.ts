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
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  vertical-align: middle;
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  vertical-align: middle;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const QuizTitle = styled.div`
  width: 60%;
  height: 30px;
  margin-bottom: 10px;
  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 20%;
  right: 20%;
  transform: (-50%, -50%);
`;

export const AnswerBox = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  gap: 10px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
