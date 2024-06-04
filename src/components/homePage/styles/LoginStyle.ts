import styled from "styled-components";

export const LoginOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 750px;
  height: 400px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 14px;
`;

export const LoginTitleContainer = styled.img`
  margin: 10px;
  scale: 35%;
`;

export const KaKaoLoginButtonContainer = styled.div`
  margin: 10px;
  background-color: #ffe500;
  border-radius: 10px;
  width: 400px;
  height: 55px;
  display: flex;
  justify-content: center; /* 텍스트를 수평 중앙으로 정렬 */
  align-items: center; /* 텍스트를 수직 중앙으로 정렬 */
`;
export const GoogleLoginButtonContainer = styled.div`
  margin: 10px;
  background-color: #eeeeee;
  border-radius: 10px;
  width: 400px;
  height: 55px;
  display: flex;
  justify-content: center; /* 텍스트를 수평 중앙으로 정렬 */
  align-items: center; /* 텍스트를 수직 중앙으로 정렬 */
`;

export const ImgContainer = styled.img`
  scale: 80%;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
