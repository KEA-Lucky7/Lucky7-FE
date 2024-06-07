import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 67vw;
  height: 100%;
  margin: 0 auto;
  // border: 1px solid red;
  background: #fffef9;
`;

export const SearchKeyword = styled.div`
  padding: 60px 0px 0px 0px;
  font-size: 27px;
  background: #fffef9;
`;

export const SearchMenuContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0px 0px 0px;
  border-bottom: 1px solid #aaa;
  position: sticky;
  top: 55px;
  background: #fffef9;
  z-index: 10;
`;

export const SearchMenu = styled.div<{ selected: boolean }>`
  font-size: 18px;
  text-decoration: none;
  padding: 10px;
  width: 12vw;
  color: ${({ selected }) => (selected ? "black" : "#aaa")};
  border-bottom: 2px solid
    ${({ selected }) => (selected ? "gray" : "transparent")};
  &:hover {
    color: ${({ selected }) => (selected ? "black" : "gray")};
    border-bottom: 2px solid ${({ selected }) => (selected ? "gray" : "#aaa")};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px;
  position: sticky;
  top: 95px;
  background: #fffef9;
  z-index: 10;
  padding: 10px 0;
`;

export const SortContainer = styled.div`
  display: flex;
  position: relative;
`;

export const SortMenu = styled.div<{ selected: boolean }>`
  margin: 0px 20px 0px 20px;
  color: ${({ selected }) => (selected ? "black" : "#aaa")};
  &:hover {
    color: ${({ selected }) => (selected ? "black" : "gray")};
  }
`;

export const SearchDesc = styled.div`
  margin: 20px 0px 20px 0px;
  font-size: 13px;
  color: #aaa;
`;

export const PeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fffef9;
  border: 1px solid #ccc;
  padding: 10px 0px 10px 0px;
  border-radius: 10px;
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 1;
`;

export const PeriodOption = styled.div`
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  &:hover {
    background: #fffef9;
  }
`;

export const PeriodInput = styled.input`
    margin: 7px 0px 7px 0px;
    padding: 0px 10px 0px 10px;
    background-color: #fffef9;
    border: 1px solid #f5f5f5;
    border-radius: 10px;
    margin: 5px 10px 0px 10px;
    height: 20px;
    width: 20%
    justify-content: center;
    align-items: center;
    &:focus {
        border: 1px solid #ccc;
        outline: none;
    }
`;
