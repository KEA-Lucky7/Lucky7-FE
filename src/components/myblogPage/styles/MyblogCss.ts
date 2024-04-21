import styled from "styled-components";

export const BlogContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 1000px;
`;

export const Picturecontainer = styled.div`
  width: 75%;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
`;

export const TitleBox = styled.div`
  padding: 10px 20px;
  font-size: 28px;
  background-color: none;
  color: white;
  position: absolute;
  top: 80%;
  left: 15%;
  transform: translate(-50%, -50%);
`;

export const SubTitleBox = styled(TitleBox)`
  font-size: 14px;
  top: 90%;
  left: 8%;
`;

export const PostContainer = styled.div`
  width: 75%;
  height: 800px;
  border: 1px solid black;
  margin: 0 auto;
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
  height: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
`;
