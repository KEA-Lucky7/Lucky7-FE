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
    background-color: #DEDEDE;
    padding: 20px;
    &:hover {
        background-color: #777777;
    }
`;

export const ListItemContainer = styled.div`
`;

