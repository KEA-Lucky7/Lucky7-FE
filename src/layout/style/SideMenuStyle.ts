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
  position: fixed;
  top: 0;
  left: 0;
  width: 16vw;
  height: 100%;
  background-color: #e1e1e1;
  // padding: 45px;
  // padding-top: 60px;
`;

export const Title = styled.div`
  font-size: 18px;
  margin: 40px 0px 0px 30px;
`;

export const LoginOut = styled.div`
  margin: 5px 0px 0px 30px;
  color: #616161;
  font-size: 14px;
`;

export const MenuList = styled.div`
  height: 250px;
  // border: solid 1px red;
  margin: 0px 0px 0px 30px;
  display: flex;
  flex-flow: column;
  align-items: space-between;
  justify-content: space-evenly;
  font-size: 15px;
`;

export const Settings = styled.div`
  border-top: solid 1px #505050;
  padding-top: 10px;
  margin: 0px 30px 0px 30px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #616161;
`;
