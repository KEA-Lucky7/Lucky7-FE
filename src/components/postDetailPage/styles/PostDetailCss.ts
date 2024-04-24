import styled from "styled-components";


interface PictureContainerProps {
    imageUrl: string;
}


export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    //border: 1px solid red;
    display: flex;
    flex-direction: column;

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
    margin: 0 auto;
`;



export const TextBox = styled.div`
    width: 100%;
    height: 0%;
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FirstLine = styled.div`
    width: 50%;
    //border: 1px solid blue;
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-size: 24px;
    position: absolute;
    top: 210px;
    left: 380px;
    
`;

export const SecondLine = styled(FirstLine)`
    top: 250px;
    font-size: 40px;

`;

export const ThirdLine = styled(FirstLine)`
    top: 350px;
`;



export const PostIntro = styled.div`
    width: 30%;
    height: 100%;
    margin: 0 auto;
    //border: 1px solid blue;
    display: flex;
    flex-direction: row;
    gap: 20px;
    text-align: right;
    justify-content: right;
    padding-top: 10px;
`;

export const PostBox = styled(PostIntro)`
    flex-direction: column;
    text-align: left;
    justify-content: left;
`;


export const TagBox = styled(PostIntro)`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    gap: 10px;

`;


export const PictureBox = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    margin-left: 40px;
    margin-right: 20px;
`;


export const ContentBox = styled.div`
    width: 30%;
    height: 50%;
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    justify-content: left;
    padding-top: 10px;
`;

export const FirstTag = styled.div`
    width: 20%;
    height: 30px;
    border-radius: 10px;
    background-color: #eaeaea;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #49519e;
`;

export const SecondTag = styled(FirstTag)`
    width: 15%;
    height: 30px;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;

`;

export const CommentBox = styled.div`
    width: 30%;
    height: 100%;
    margin: 0 auto;
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`;

export const profileBox = styled.div`
    width: 30%;
    height: 100%;
    margin: 0 auto;
    //border: 1px solid blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 50px;
`;

export const Commment = styled.div`
    width: 100%;
    height: 100%;
    //border: 1px solid blue;
    gap: 20px;
    display: flex;
    flex-direction: row;
`;


export const HeartBox = styled.div`
    width: 100%;
    height: 20%;
    //border: 1px solid blue;
`;

export const postDetailList = styled.div`
    width: 30%;
    height: 30%;
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 50px;  
`;

export const postDetailListTitle = styled.div`
    width: 30%;
    //border: 1px solid blue;
    font-size: 24px;
    font-weight: bold;
    margin-left: 40px;
`;

export const postDetailListBox = styled.div`
    width: 100%;
    height: 100%;
    //border: 1px solid blue;

`;

export const PaginationBox = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageNumber = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

export const ListBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  text-decoration: none;
  text-align: left;
  justify-content: left;
  //border: 1px solid blue;
  
`;

export const ListTitle = styled.div`
  width: 70%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const CheckField = styled.div`
  width: 20%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  vertical-align: middle;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBox = styled.div`
    width: 30%;
    height: 100%;
    //border: 1px solid blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    margin: 0 auto;
    gap: 10px;
    text-align: center;
`;