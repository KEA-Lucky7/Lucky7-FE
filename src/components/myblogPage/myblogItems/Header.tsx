import React from 'react'
import * as S from "../styles/HeaderStyled.ts";
import search from "../../../assets/header/search.png";
import notice from "../../../assets/header/notice.png";
import setting from "../../../assets/header/setting.png";
import logout from "../../../assets/header/logout.png";
export default function Header() {
  return (
    <S.Header>
        <S.LogoBox>로고자리</S.LogoBox>
        <S.IconBox>
          <img src={search} alt='search' width={'40px'} height={'40px'}/>
          <img src={notice} alt='search' width={'50px'} height={'40px'}/>
          <img src={setting} alt='search' width={'40px'} height={'40px'}/>
          <img src={logout} alt='search' width={'40px'} height={'40px'}/>
        </S.IconBox>
    </S.Header>
  )
}
