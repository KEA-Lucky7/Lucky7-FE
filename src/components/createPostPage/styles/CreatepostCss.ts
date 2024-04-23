import styled from "styled-components";

interface PictureContainerProps {
  imageUrl: string;
}


export const NewPostInputContainer = styled.div`
    width: 40%;
    height: 800px;
    margin: 0 auto;
    border-bottom: 1px solid grey;
    
`;

export const TemporaryBox = styled.div`
    width: 11%;
    height: 50px;
    border: 1px solid red;
    float: right;
    margin: 30px 100px 0px 50px;
    line-height : 50px;
    text-align: center;

`;


export const TextEditBox = styled.div`
    width: 100%;
    height: 100px;
    margin: 0 auto;
    border: 1px solid blue;
`;

export const TitleInputBox = styled.div`
    width: 100%;
    height: 50px;
    margin: 0 auto;
    border: none;
    font-size: 24px;
`;
export const TitleInput = styled.input`
    width: 100%;
    height: 50px;
    outline: none;
    background-color: transparent;
    border: none;
    &::placeholder { 
        font-size: 20px;
        color: white;
    }
`;

export const MainTextInput = styled.div`
    width: 50%;
    height: 50px;
    margin: 0 auto;
    border: 1px solid grey;
`;

export const TagBox = styled.div`
    width: 40%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    gap: 10px;
    margin-top: 20px;
`;

export const RepresentativeTagBox = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const RepresentativeTagTitle = styled.div`
    width: 20%;
    height: 50px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  
`;

export const RepresentativeTagInputBox = styled.div`
    width: 500px;
    height: 100px;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TagItem = styled.div`
  width: 15%;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #eaeaea;
  text-align: left;
  font-size: 14px;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;
  color: #49519e;
`;

export const TagInput = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid black;

`;



export const Header = styled.div`
  width: 67vw;
  height: 80px;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 1;
  border: 1px solid red;
  margin: 0 auto;
`;

export const LeftContainer = styled.div`
  width: 180px;
  height: 40px;
  // border: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 30px;
`;

export const RightContainer = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: right;
  text-align: right;
  margin-right: 30px;
  border: 1px solid red;
`;

export const TemporaryButton = styled.div`
  width: 92px;
  height: 36px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D7D7D7;
`;

export const PostButton = styled(TemporaryButton)`
  background-color: #7A7A7A;
  color: white;

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
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  width: 450px;
  position: absolute;
  text-align: left;
  bottom: 80px;
  left: 350px;
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

export const CreateTag = styled.div`
  width: 92px;
  height: 36px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D7D7D7;
  margin-top: 10px;
`;

export const DeleteTagButton = styled.div`
  font-size: 12px;
  color: black;
  font-weight: bold;
  text-align: right;
  align-items: right;

`;


