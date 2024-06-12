import { useEffect, useState } from "react";
import * as S from "../myblogPage/styles/MyblogCss";
import Titlebackground from "../../assets/myblog/Titlebackground.jpg";
import MyblogWidget from "./MyblogWidget";
import AccountBook from "./AccountBook";
import MyblogPostList from "./MyblogPostList";
import MyblogCategoryWidget from "./MyblogCategoryWidget";
import Report from "../reportPage/Report";
import { useBlogStore } from "../homePage/login/state";
import { useParams } from "react-router-dom";

export default function Myblog() {
  const [contents, setContents] = useState<string>("postList");
  let backgroundImageUrl = Titlebackground;
  const { blogInfo } = useBlogStore();
  const { blogId } = useParams<{ blogId: string }>();
  const [blogName, setBlogName] = useState("");
  const [blogAbout, setBlogAbout] = useState("");
  const [blogHeaderImg, setBlogHeaderImg] = useState("");

  useEffect(() => {
    if (blogInfo) {
      const storedBlogInfo = JSON.parse(blogInfo);
      setBlogName(storedBlogInfo.blogName);
      setBlogAbout(storedBlogInfo.about);
      setBlogHeaderImg(storedBlogInfo.headerImage);

      if (storedBlogInfo.headerImage) {
        backgroundImageUrl = storedBlogInfo.headerImage;
      }
    }
  }, [blogInfo]);

  return (
    <S.MyBlogContainer>
      <S.Picturecontainer imageUrl={backgroundImageUrl}>
        <S.TitleContainer>
          <S.TitleBox>{blogName}</S.TitleBox>
          <S.SubTitleBox>{blogAbout}</S.SubTitleBox>
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
