import React from 'react'
import * as S from "./styles/MyblogWidgetCss";

export default function MyblogPostCategory() {
    return (
        <S.MyblogCategoryWidgetContainer>
            <S.Title>전체게시물</S.Title>
            <S.TagBox>&gt;태그</S.TagBox>
            <S.Tag>
                <div>
                    - 여행
                </div>
                <div>
                    - 여행
                </div>
                <div>
                    - 여행
                </div>
                <div>
                    - 여행
                </div>
            </S.Tag>
        </S.MyblogCategoryWidgetContainer>
    )
}
