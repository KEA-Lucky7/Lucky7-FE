import styled from "styled-components";

export const NewPostInputContainer = styled.div`
    width: 50%;
    height: 800px;
    margin: 0 auto;
    border: 1px solid red;
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
    border: 1px solid green;
    margin: 0 auto;
`;
export const TitleInput = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid green;
`;

export const MainTextInput = styled.div`
    width: 50%;
    height: 50px;
    margin: 0 auto;
    border: 1px solid grey;
`;

export const ButtonBox = styled.div`
    width: 50%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: end;
    border: 1px solid grey;
    gap: 10px;

`;

export const CancelButton = styled.div`
    width: 15%;
    height: 50px;
    background-color: #D9D9D9;
    color: black;
    border: 1px solid blue;
    text-align: center;
    line-height : 50px;

    
`;

export const TemporaryButton = styled(CancelButton)`
    background-color: #D9D9D9;
`;

export const PostButton = styled(CancelButton)`
    background-color: #D9D9D9;
`;