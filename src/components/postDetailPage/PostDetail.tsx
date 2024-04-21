import React from 'react';
import * as S from "./styles/PostDetailCss";
import postDetailbackground from "../../assets/postDetail/postDetailbackground.png";
export default function PostDetail() {

  return (
    <S.Container>
      <S.Picturecontainer imageUrl={postDetailbackground}>
        <S.TextBox>
            <S.FirstLine>
              <div>자유글</div>
              <div>#대표태그</div>
            </S.FirstLine>
            <S.SecondLine>
              <div>내가 좋아하는 베이글 뿌시고 옴</div>
            </S.SecondLine>
            <S.ThirdLine>
              <div>by name</div>
              <div>2024.04.14</div>
            </S.ThirdLine>
          </S.TextBox>
      </S.Picturecontainer>
    </S.Container>
  )
}
