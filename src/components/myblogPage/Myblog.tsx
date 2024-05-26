import { useState } from "react";

import * as S from "../myblogPage/styles/MyblogCss";
import Titlebackground from "../../assets/myblog/Titlebackground.png";
import MyblogWidget from "./MyblogWidget";
import AccountBook from "./AccountBook";
import MyblogPostList from "./MyblogPostList";
import MyblogCategoryWidget from "./MyblogCategoryWidget";
import Report from "../reportPage/Report";

export default function myblog() {
  const [contents, setContents] = useState<string>("postList");
  //"postList", "accountBook", "report"
  let [backgroundImageUrl, setBackgroundImageUrl] =
    useState<string>(Titlebackground);

  const backgroundImgUrlHandler = () => {
    setBackgroundImageUrl("/")
  }

  return (
    <S.MyBlogContainer>
      <S.Picturecontainer imageUrl={backgroundImageUrl} onClick={backgroundImgUrlHandler}>
        <S.TitleContainer>
          <S.TitleBox>나의 일상을 담은 일기장</S.TitleBox>
          <S.SubTitleBox>my happy life</S.SubTitleBox>
        </S.TitleContainer>
      </S.Picturecontainer>
      <S.PostContainer>
        <S.LeftSection>
          <MyblogWidget />
          <MyblogCategoryWidget setContents={setContents} />
        </S.LeftSection>
        <S.RightSection>
          {contents === "postList" && <MyblogPostList />}
          {contents === "accountBook" && <AccountBook />}
          {contents === "report" && <Report />}
        </S.RightSection>
      </S.PostContainer>
    </S.MyBlogContainer>
  );
}
