import styled from "styled-components";

export const ListContainer = styled.div`
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px; 
`;

export const ListItemBox = styled.div`
    height: 270px;
    border: 1px solid #ccc;
    background-color: #dedede;
    padding: 20px;
    &:hover {
        // filter: brightness(0.7);
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-contents: center:
    align-items: center;
`;

export const ListItemBoxContents = styled.div`
    border: 1px solid #ccc;
    margin: auto;
    color: #ffffff;
    filter: brightness(1.95);
    text-align: center;
    width: 80%;
`;

export const ListItemContainer = styled.div`
`;

