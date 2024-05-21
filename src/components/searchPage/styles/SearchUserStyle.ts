import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 10px 0;
  padding: 20px;
  width: 80%;
`;

export const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const UserDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;
