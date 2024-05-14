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
`;

export const SideContainer = styled.div`
  // border: solid 1px red;
  padding: 30px 0px 0px 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 16vw;
  height: 100%;
  background-color: #e1e1e1;
`;

export const Title = styled.div`
  font-size: 18px;
  margin: 30px 30px 0px 30px;
`;

export const LoginOut = styled.div`
  margin: 5px 30px 0px 30px;
  color: #616161;
  font-size: 14px;
`;

export const MenuList = styled.div`
  height: 280px;
  // border: solid 1px red;
  margin: 0px 30px 0px 30px;
  display: flex;
  flex-flow: column;
  align-items: space-between;
  justify-content: space-evenly;
  font-size: 15px;
  border-bottom: solid 1px #505050;
`;

export const Settings = styled.div`
  padding-top: 10px;
  margin: 0px 30px 0px 30px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #616161;
  font-size: 13px;
`;
