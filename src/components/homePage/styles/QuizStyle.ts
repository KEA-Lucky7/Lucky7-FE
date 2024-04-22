import styled from "styled-components"

export const QuizContainer = styled.div`
    width: 47px;
    height: 47px;
    border-radius: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #000;
    color: white;
    position: fixed;
    top: 35%;
    right: 12%;
    font-weight: bold;
`;

export const Title = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    vertical-align: middle;
    font-size: 24px;
    font-weight: bold;
`;

export const SubTitle = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    vertical-align: middle;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ImgBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const QuizTitle = styled.div`
    width: 60%;
    height: 30px;
    margin-bottom: 10px;
    vertical-align: middle;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 60%;
    right: 20%;
    transform: ( -50%, -50%);
`;


export const AnswerBox = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 10px;
    gap: 10px;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;

