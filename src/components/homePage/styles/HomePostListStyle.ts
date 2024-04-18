import styled from "styled-components";

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
`

export const ListItem = styled.div`
    height: 307px;
    border: 1px solid #ccc;
    background-color: #DEDEDE;
    padding: 20px;
    &: hover {
        background-color: #777777;
    }
`;