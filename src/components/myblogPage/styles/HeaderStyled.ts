import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
`;

export const LogoBox = styled.div`
    width: 180px;
    height: 40px;
    border: 1px solid red;
    margin: 20px 20px 20px 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;


export const IconBox = styled.div`
    width: 43%;
    height: 40px;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 30px;
`;


export const SearchContainer = styled.div`
  width: 330px;
  height: 35px;
  border-radius: 15px;
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
`;

export const Img = styled.img`
  border: none;
  text-align: center;
  margin-right: 10px;
  overflow: auto;
  z-index: -1;
  font-size: 15px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  margin-left: 10px;
  overflow: auto;
  z-index: -1;
  font-size: 15px;

`;
