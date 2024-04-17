
import styled from "styled-components";

export const MyblogPostContainer = styled.div`
    width: 70%;
    height: 1000px;
    border: 1px solid black;
`;

export const Picturecontainer = styled.div`
    width: 75%;
    height: 400px;
    border: 1px solid black;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
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
    border: 1px solid red;
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



export const FixandDelete = styled.div`
    width: 25%;
    height: 10px;
    border: 1px solid black;
    margin: 0px 15px 10px auto;
    font-size: 10px;
`;


export const Title = styled.div`
    width: 80%;
    height: 20px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid red;
    vertical-align: middle;
`;

export const GridBox = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
    grid-gap: 30px; /* 그리드 간격 설정 */
    border: 1px solid red;

`;

export const GridItem = styled.div`
    width: 80%;
    height: 250px;
    border: 1px solid red;
`;

export const PostName = styled.div`
    width: 80%;
    height: 30px;
    margin: 0 auto;
    border: 1px solid green;
    font-size: 12px;
    font-weight: bold;
`;

export const PostWriter = styled.div`
    width: 80%;
    height: 30px;
    margin: 0 auto;
    border: 1px solid green;
    font-size: 12px;
`;

export const PostDate = styled.div`
    width: 80%;
    height: 30px;
    margin: 0 auto;
    border: 1px solid green;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;

`;