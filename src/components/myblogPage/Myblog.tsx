import { useEffect, useState } from "react";
import * as S from "../myblogPage/styles/MyblogCss";
import Titlebackground from "../../assets/myblog/Titlebackground.jpg";
import MyblogWidget from "./MyblogWidget";
import AccountBook from "./AccountBook";
import MyblogPostList from "./MyblogPostList";
import MyblogCategoryWidget from "./MyblogCategoryWidget";
import Report from "../reportPage/Report";
import { useBlogStore } from "../homePage/login/state";

export default function Myblog() {
  const [contents, setContents] = useState<string>("postList");
  //"postList", "accountBook", "report"
  let backgroundImageUrl = Titlebackground;

  const { blogInfo } = useBlogStore();

  useEffect(() => {
    if (blogInfo) {
      const storedBlogInfo = JSON.parse(blogInfo);
      console.log("Blog Name:", storedBlogInfo.blogName);
      console.log("About:", storedBlogInfo.about);
      console.log("Header Image:", storedBlogInfo.headerImage);

      if (storedBlogInfo.headerImage) {
        backgroundImageUrl = storedBlogInfo.headerImage;
      }
    }
  }, [blogInfo]);

  return (
    <S.MyBlogContainer>
      <S.Picturecontainer imageUrl={backgroundImageUrl}>
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
