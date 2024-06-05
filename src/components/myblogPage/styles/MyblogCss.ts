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
  background: #fffef9;
  // background: black;
`;

export const Picturecontainer = styled.div<PictureContainerProps>`
  width: 67vw;
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
  width: 67vw;
  height: 800px;
  // border: 1px solid black;
  margin-top: 10px;
  display: flex;
  // flex-direction: row;
`;

export const LeftSection = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  width: 70%;
  // height: 100%;
  // border: 1px solid blue;
  display: flex;
  flex-direction: row;
`;
