import styled from "styled-components";

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  // backdrop-filter: blur(0.5px);
`;

export const SideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 210px;
  height: 100%;
  background-color: #e1e1e1;
  // border: solid 1px red;
  padding: 45px;
  padding-top: 60px;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const LoginOut = styled.div`
  margin-top: 3px;
  color: #616161;
  font-size: 15px;
`;

export const MenuList = styled.div`
  height: 250px;
  // border: solid 1px red;
  display: flex;
  flex-flow: column;
  align-items: space-between;
  justify-content: space-evenly;
`;

export const Settings = styled.div`
  border-top: solid 1px #505050;
  padding-top: 10px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #616161;
`;
