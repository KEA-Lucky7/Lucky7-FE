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



export const TextBox = styled.div`
    width: 100%;
    height: 0%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FirstLine = styled.div`
    width: 50%;
    border: 1px solid blue;
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
    border: 1px solid blue;
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




export const ContentBox = styled.div`
    width: 30%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid blue;
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


