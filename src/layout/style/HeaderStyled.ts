import styled from "styled-components";
import Search from "../../../src/assets/header/search.png";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 1;
  // border: 1px solid blue;
`;

export const LeftContainer = styled.div`
  width: 180px;
  height: 40px;
  // border: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const RightContainer = styled.div`
  width: 400px;
  height: 40px;
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 310px;
  height: 35px;
  border-radius: 15px;
  border: solid 1.5px black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  opacity: 1;
`;

export const ImgBtn = styled.button`
  background-size: cover;
  background-color: #fff;
  background-position: center;
  border: none;
  text-align: center;
  margin-right: 10px;
  overflow: auto;
  font-size: 15px;
  object-fit: cover;
  width: 20px;
  height: 20px;
  background-image: url(${Search});
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  margin-left: 10px;
  overflow: auto;
  font-size: 15px;
  background: none;
`;
