import React from 'react';
import * as S from "./styles/MyblogPostCss";
import GridItem from './myblogItems/GridItem';
export default function MyblogPostList() {
    return (
        <S.MyblogPostContainer>
            <S.Title>자유글(카테고리명)</S.Title>
            <S.GridBox>
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
            </S.GridBox>
        </S.MyblogPostContainer>
    )
}
