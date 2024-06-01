// LikePostListStyle.js
import styled from 'styled-components';

export const SearchContainer = styled.div`
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
  padding: 10px 0;
`;

export const Title = styled.div`
  flex: 0 0 50%;
  text-align: left;
  padding-right: 10px;
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
`;

export const ListHeader = styled(ListItem)`
  font-weight: bold;
  border-bottom: 1px solid #ddd;
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
