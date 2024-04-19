import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  background: white;
`;

export const LeftContainer = styled.div`
  width: 180px;
  height: 40px;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 30px;
`;

export const RightContainer = styled.div`
  width: 400px;
  height: 40px;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 30px;
`;

export const SearchContainer = styled.div`
  width: 330px;
  height: 35px;
  border-radius: 15px;
  border: solid 1.5px black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  opacity: 1;
`;

export const Img = styled.img`
  border: none;
  text-align: center;
  margin-right: 10px;
  overflow: auto;
  font-size: 15px;
  object-fit: cover;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  margin-left: 10px;
  overflow: auto;
  font-size: 15px;
`;
