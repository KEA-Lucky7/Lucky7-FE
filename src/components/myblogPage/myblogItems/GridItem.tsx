import React from 'react'
import * as S from "../styles/MyblogPostCss"
export default function GridItem() {
    return (
        <>
            <S.GridItem>
                <S.Picturecontainer>
                    사진자리입니다.
                </S.Picturecontainer>
                <S.FixandDelete>
                    수정/삭제
                </S.FixandDelete>
                <S.PostName>
                    제목
                </S.PostName>
                <S.PostWriter>
                    작성자
                </S.PostWriter>
                <S.PostDate>
                    <div>작성날짜</div>
                    <div>공감수</div>
                </S.PostDate>
            </S.GridItem>
        </>
    )
}
