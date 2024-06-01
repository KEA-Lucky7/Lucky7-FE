// LikePostListStyle.js
import styled from 'styled-components';

export const PostContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

export const ListItem = styled.div`
  display: flex;
  width: 100%;
  padding: 11px 0;
  align-items: center;
`;

export const Title = styled.div`
  flex: 0 0 50%;
  text-align: left;
  padding-right: 10px;
  overflow: hidden; /* 넘치는 내용을 숨깁니다. */
  text-overflow: ellipsis; /* 넘치는 내용을 줄임표로 표시합니다. */
  white-space: nowrap; /* 텍스트를 한 줄로만 표시합니다. */
`;

export const TitleHeader = styled.div`
  flex: 0 0 50%;
  padding-right: 10px;
  text-align: center;
`;

export const Item = styled.div`
  flex: 1;
  padding-right: 10px;
  text-align: center;
  overflow: hidden; /* 넘치는 내용을 숨깁니다. */
  text-overflow: ellipsis; /* 넘치는 내용을 줄임표로 표시합니다. */
  white-space: nowrap; /* 텍스트를 한 줄로만 표시합니다. */
`;

export const ListHeader = styled(ListItem)`
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  margin: 0px 0px 0px 0px;
`;

export const CheckBox = styled.input`
  width: 17px;
  height: 17px;
  margin: 0px 30px 0px 0px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const SelectAllCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const SelectAllCheckboxLabel = styled.label`
  margin-left: 5px;
`;

export const DeleteLikeBtn = styled.div`
  margin-left: auto;
`;
