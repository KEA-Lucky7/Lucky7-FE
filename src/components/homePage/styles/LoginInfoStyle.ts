import styled from "styled-components";

export const LoginOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 2; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginContents = styled.div`
    font-size: 13px;
    padding: 10px;
`;

export const LoginTitleContainer = styled.div`
    margin: 90px 0px 30px 0px;
    font-size: 30px;
`;

export const LoginInfoContainer = styled.div`
    margin: 7px 0px 0px 0px;
    font-size: 13px;
    display: flex;
`

export const LoginInputContainer = styled.input`
    margin: 7px 0px 7px 0px;
    padding: 0px 20px 0px 20px;
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 10px;
    width: 350px;
    height: 30px;    
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus {
        border: 1px solid #ccc;
        outline: none;
    }
`;

export const LoginButtonContainer = styled.div`
    margin: 25px 0px 90px 0px;
    background-color: #d9d9d9;
    border-radius: 10px;
    width: 450px;
    height: 55px;    
    display: flex;
    justify-content: center;
    align-items: center;
`;

