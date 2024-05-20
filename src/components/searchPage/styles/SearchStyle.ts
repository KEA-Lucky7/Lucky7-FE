import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 67vw;
  height: 100%;
  margin: 0 auto;
`;

export const SearchKeyword = styled.div`
  margin: 60px 0px 0px 0px;
  font-size: 27px;
`;

export const SearchMenuContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0px 0px 0px;
  border-bottom: 1px solid #aaa
`;

export const SearchMenu = styled.div<{ selected: boolean }>`
  font-size: 18px;
  text-decoration: none;
  padding: 10px;
  width: 12vw;
  color: ${({ selected }) => (selected ? "black" : "#aaa")};
  border-bottom: 2px solid ${({ selected }) => (selected ? 'gray' : 'transparent')};
  &:hover {
    color: ${({ selected }) => (selected ? "black" : "gray")};
    border-bottom: 2px solid ${({ selected }) => (selected ? 'gray' : '#aaa')};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px;
`;

export const PeriodContainer = styled.div`
  display: flex;
`;

export const PeriodMenu = styled.div<{ selected: boolean }>`
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