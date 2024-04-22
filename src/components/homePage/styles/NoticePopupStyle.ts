import styled from "styled-components";

export const NoticePopupContainer = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 400px;
    height: 300px;
    background-color: #ffffff;
    border: 5px solid #ccc;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    z-index: 1;
    align-contents: center;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
`;

export const NoticeContents = styled.div`
    padding: 5px;
    margin: 5px;
`;

export const NoticeTitle = styled.div`
    margin: 20px 0px 20px 0px;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const NoticeText = styled.div`
    padding: 5px;
    margin: 5px;
`;

export const CheckBoxLabel = styled.label`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
`;
