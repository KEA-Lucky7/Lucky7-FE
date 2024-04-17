import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); 
    z-index: 1000; 
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px); 
`;

export const LoginContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginTitleContainer = styled.div`
    margin: 10px;
    font-size: 50px;
`;

export const LoginInfoContainer = styled.div`
    margin: 10px;
    text-align: center;
`

export const LoginButtonContainer = styled.div`
    margin: 10px;
    background-color: #d9d9d9;
    border-radius: 10px;
    width: 450px;
    height: 55px;    
    display: flex;
    justify-content: center; /* 텍스트를 수평 중앙으로 정렬 */
    align-items: center; /* 텍스트를 수직 중앙으로 정렬 */
`;

