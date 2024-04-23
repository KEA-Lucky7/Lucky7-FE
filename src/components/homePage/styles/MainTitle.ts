import styled from "styled-components";

interface MainTitleContainerProps {
  imageUrl: string;
}

export const MainTitleContainer = styled.div<MainTitleContainerProps>`
  // border: 1px solid red;
  width: 100%;
  height: 350px;
  border-radius: 5px;
  // background-color: #d4d4d4;
  background: ${({ imageUrl }) =>
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl}) no-repeat center center`};
  background-size: cover;
  color: #ffffff;
  text-align: right;
  position: relative;
`;

export const TextContainer = styled.div`
  // border: 1px solid red;
  font-size: 25px;
  position: absolute;
  right: 30px; /* 우측 여백 */
  bottom: 30px; /* 하단 여백 */
`;

export const Text = styled.div`
  margin: 3px;
`;

export const ByMoaBoa = styled.div`
  font-size: 16px;
  padding: 5px;
`;
