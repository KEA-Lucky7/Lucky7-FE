import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ReportTitle = styled.div`
  font-size: 28px;
  margin: 10px 0px 0px 0px;
`;

export const ReportMenuContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0px 0px 0px;
`;

export const ReportMenu = styled.div<{ selected: boolean }>`
  font-size: 18px;
  text-decoration: none;
  color: ${({ selected }) => (selected ? "black" : "#aaa")};

  &:hover {
    color: ${({ selected }) => (selected ? "black" : "gray")};
  }
`;

export const ReportMenuSep = styled.div`
  font-size: 13px;
  font-color: #ccc;
  margin: 2px 10px 2px 10px;
`;

export const ReportContent = styled.div`
  margin: 30px 0px 0px 0px;
`;
