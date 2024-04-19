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
  width: 330px;
  height: 100%;
  background-color: #e1e1e1;
  display: flex;
  justify-content: space-between;
`;

export const SideMenuContents = styled.div`
  padding: 50px;
`;
