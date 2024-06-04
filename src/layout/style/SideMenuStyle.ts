import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MenuOverlay = styled.div`
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

export const SideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 230px;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: ${slideIn} 0.3s ease forwards;
`;

export const TitleImg = styled.img`
  width: 100px;
  margin-top: 30px;
`;

export const LoginOut = styled.div`
  margin: 5px 30px 0px 30px;
  color: #616161;
  font-size: 14px;
`;

export const MenuList = styled.div`
  height: 270px;
  padding-right: 70px;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  font-size: 15px;
`;

export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  img {
    width: 15px;
    height: 15px;
    padding: 8px;
    background-color: lightgray;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const Settings = styled.div`
  padding-right: 70px;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  font-size: 15px;
`;
