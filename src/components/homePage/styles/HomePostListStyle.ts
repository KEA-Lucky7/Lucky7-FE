import styled from "styled-components";

export const PostListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 15px;
  width: 100%;
  font-size: 20px;
`;

export const ListContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

export const ListItemBox = styled.div`
  height: 15vw;
  border: 1px solid #ccc;
  background-color: #dedede;
  padding: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: relative; /* 추가: 자식 요소의 절대 위치를 설정하기 위해 필요 */
`;

export const ListItemBoxContents = styled.div`
  margin: auto;
  color: #ffffff;
  text-align: center;
  width: 80%;
  position: absolute; /* 추가: 부모 요소의 상대 위치를 기준으로 절대 위치를 설정 */
  z-index: 1;
`;

export const ListItemBoxOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;

  ${ListItemBox}:hover & {
    opacity: 1;
  }
`;

export const TextContainer = styled.div`
  z-index: 1;
`;

export const ListItemContainer = styled.div`
  margin-bottom: 10px;
`;

export const ItemInfoContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55px;
`;

export const ItemInfoLeft = styled.div`
  margin-right: 10px;
`;

export const ItemTitle = styled.div`
  display: flex;
`;

export const Writer = styled.div`
  font-weight: 500;
`;

export const Date = styled.div`
  font-size: 14px;
  color: #434343;
`;

export const Tag = styled.span`
  color: #4566e3;
`;

export const Button = styled.div`
  background-color: #eaeaea;
  border-radius: 8px;
  color: #49519e;
  padding: 8px;
  width: 60px;
  text-align: center;
`;
