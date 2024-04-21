import styled from "styled-components";


interface PictureContainerProps {
    imageUrl: string;
  }

  
export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid red;
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

export const PostDetailBackgroundImage = styled.div`
    width: 100%;
    position: relative;
`;



export const TextBox = styled.div`
    width: 100%;
    height: 0%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`;

export const FirstLine = styled.div`
    width: 100%;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-size: 24px;
    position: absolute;
    top: 210px;
    left: 40px;
    
`;

export const SecondLine = styled(FirstLine)`
    top: 250px;
    left: 40px;
    font-size: 40px;

`;

export const ThirdLine = styled(FirstLine)`
    top: 350px;
    left: 40px;
`;



export const PostBox = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    gap: 20px;
    text-align: right;
    justify-content: right;
    padding-top: 10px;
`;