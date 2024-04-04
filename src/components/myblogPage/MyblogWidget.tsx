import React from 'react';
import * as S from "./styles/MyblogWidgetCss";
export default function MyblogWidget() {
  return (
    <S.MyblogWidgetContainer>
      <S.Picturecontainer>
        사진자리입니다.
      </S.Picturecontainer>
      <S.UserNickname>
        사용자 닉네임 자리
      </S.UserNickname>
      <S.UserId>
        사용자 아이디 자리
      </S.UserId>
      <S.CreateNewpostButtonContainer>
          새로운 글 작성하기
      </S.CreateNewpostButtonContainer>
    </S.MyblogWidgetContainer>
  )
}
