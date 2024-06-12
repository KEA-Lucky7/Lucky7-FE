import styled from "styled-components";

export const All = styled.div`
    background-color: #fffef9;
`;

export const Container = styled.div`
  width: 67vw;
  height: 100%;
  margin: 0 auto;
  //border: 1px solid blue;
`;

export const LikeTitle = styled.div`
  font-size: 32px;
  margin: 0px 0px 20px 0px;
  padding: 20px 0px 0px 0px;
  background-color: #fffef9;
  position: sticky;
  top: 80px;
`;

export const LikeCount = styled.div`
  font-size: 13px;
  margin: 0px 0px 10px 0px;
  padding: 20px 0px 0px 0px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;