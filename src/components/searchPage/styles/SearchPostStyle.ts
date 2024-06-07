import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const PostCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fffef9;
  margin: 10px 0;
  padding: 20px;
  width: 100%;
  height: 200px;
`;

export const PostContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.h2`
  margin: 0 0 10px 0;
  font-size: 18px;
`;

export const Content = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;
  flex: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const CreateAt = styled.span`
  color: #888;
  margin-right: 10px;
`;

export const Tag = styled.span`
  color: #007bff;
`;

export const PostImage = styled.img`
  width: 190px;
  height: 180px;
  margin-left: 20px;
  object-fit: cover;
  background-position: center;
`;
