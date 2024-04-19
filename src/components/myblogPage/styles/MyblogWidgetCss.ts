import styled from "styled-components";

export const MyblogWidgetContainer = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;


export const Picturecontainer = styled.div`
    width: 92px;
    height: 92px;
    background-color: #D9D9D9;
    border-radius: 100%;
    margin-top: 10px;
`;


export const UserNickname = styled.div`
    width: 100%;
    height: 30px;
    border: 1px solid green;
`;

export const UserId = styled.div`
    width: 100%;
    height: 30px;
    border: 1px solid green;
    margin-bottom: 10px;
`;


export const CreateNewpostButtonContainer = styled.div`
    width: 92px;
    height: 30px;
    background-color: grey;
    color: #fff;
    border-radius: 20px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

`;


//===========================카테고리 위젯 css===========================


export const MyblogCategoryWidgetContainer = styled.div`
    width: 80%;
    height: 300px;
    border: 1px solid green;
    margin: 0 auto;
`;

export const Title = styled.div`
    width: 100%;
    height: 40px;
    margin: 0 auto;
    border: 1px solid red;
`;

export const ContentTitle = styled.div`
    width: 100%;
    height: 40px;
    margin: 0 auto;
    border: 1px solid red;
    font-size: 20px;
    display: flex;
    flex-direction: row;
`;

export const Circle = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #D9D9D9;
`;


export const SubCircle = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #D9D9D9;
`;

export const TagBox = styled.div`
    width: 100%;
    height: 20px;
    margin: 0 auto;
    border: 1px solid red;
    vertical-align: middle;
`;

export const Tag = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100px;
    margin: 0px 0px 0px 25px;
    gap: 5px;
    border: 1px solid red;
    vertical-align: middle;
`;



