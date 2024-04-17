import React from 'react'
import * as S from "../styles/HeaderStyled.ts";
import moaboa from "../../../assets/header/moaboa.png";
import Menu from "../../../assets/header/Menu.png";
import Bell from "../../../assets/header/Bell.png";
import Search from "../../../assets/header/Search.png";
export default function Header() {
  return (
    <S.Header>
      <S.LogoBox>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={Menu} alt='메뉴' width={'25px'} height={'15px'} />
        </div>
        <img src={moaboa} alt='로고' width={'130px'} height={'27px'} />
      </S.LogoBox>
      <S.IconBox>
        <S.SearchContainer>
          <S.SearchInput type="text" placeholder="키워드를 검색하세요(내 블로그 내 검색)" />
          <S.Img src={Search} alt='Search' width={'20px'} height={'20px'} />
        </S.SearchContainer>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={Bell} alt='Bell' width={'20px'} height={'25px'} />
        </div>
      </S.IconBox>
    </S.Header>
  );
}
