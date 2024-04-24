import { Link } from "react-router-dom";
import styled from "styled-components";

interface PictureContainerProps {
  imageUrl: string;
}

export const MyBlogContainer = styled.div`
  // border: solid 1px blue;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Picturecontainer = styled.div<PictureContainerProps>`
  width: 70%;
  height: 400px;
  margin-top: 10px;
  position: relative;
  background: ${({ imageUrl }) =>
    `black url(${imageUrl}) no-repeat center center`};
  background-size: cover;
  border-radius: 4px;
`;

export const TitleContainer = styled.div`
  width: 450px;
  position: absolute;
  text-align: left;
  bottom: 40px;
  left: 40px;
`;

export const TitleBox = styled.div`
  font-size: 28px;
  background-color: none;
  color: white;
`;

export const SubTitleBox = styled(TitleBox)`
  font-size: 14px;
  top: 90%;
  left: 8%;
`;

export const PostContainer = styled.div`
  width: 70%;
  height: 800px;
  // border: 1px solid black;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

export const LeftSection = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  width: 70%;
  // height: 100%;
  // border: 1px solid blue;
  padding: 20px;
`;

// 레포트섹션용

export const ReportTitle = styled.div`
  font-size: 28px;
  margin: 10px 0px 0px 0px;
`;

export const ReportMenuContainer = styled.div`
  display: flex;
  margin: 30px 0px 0px 0px;
`;

export const ReportMenu = styled.div<{ selected: boolean }>`
  font-size: 18px;
  text-decoration: none;
  color: ${({ selected }) => (selected ? "black" : "#aaa")};

  &:hover {
    color: ${({ selected }) => (selected ? "black" : "gray")};
  }
`;

export const ReportMenuSep = styled.div`
  font-size: 13px;
  font-color: #ccc;
  margin: 2px 10px 2px 10px;
`;

export const ReportContent = styled.div`
  margin: 30px 0px 0px 0px;
`;
