import styled from "styled-components";

export const PostListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Title = styled.div`
  //   border: solid 1px red;
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
  //   border: solid 1px red;
  width: 100%;
`;

export const ListItemBox = styled.div`
    height: 15vw;
    border: 1px solid #ccc;
    background-color: #dedede;
    padding: 20px;
    &:hover {
        filter: brightness(0.7);
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-contents: center:
    align-items: center;
    border-radius: 12px;
`;

export const ListItemBoxContents = styled.div`
  margin: auto;
  color: #ffffff;
  filter: brightness(1.95);
  text-align: center;
  width: 80%;
`;

export const ListItemContainer = styled.div`
  margin-bottom: 10px;
`;

export const ItemInfoContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;
export const ItemInfoLeft = styled.div`
  margin-right: 10px;
`;

export const ItemTitle = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

export const Writer = styled.div`
  font-weight: 500;
`;

export const Date = styled.div`
  font-size: 14px;
  color: gray;
`;

export const ItemInfoRight = styled.div``;

export const Tag = styled.span`
  background-color: #eaeaea;
  border-radius: 7px;
  padding: 0px 3px 0px 3px;
  color: #49519e;
`;

export const Botton = styled.div`
  background-color: #eaeaea;
  border-radius: 8px;
  color: #49519e;
  padding: 8px;
  width: 60px;
  text-align: center;
`;
