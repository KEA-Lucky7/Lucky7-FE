import { useState } from "react";
import * as S from "./styles/SettingBannerStyle";
import bannerImage from "../../assets/setting/BannerImage.png";

export default function SettingBanner() {
    
  // const [backgroundimageurl, setBackgroundimageurl] = useState<string>(bannerImage);
  const backgroundimageurl = bannerImage;

  const [blogTitle, setBlogTitle] = useState("나의 일상을 담은 일기장");
  const [charCount, setCharCount] = useState(blogTitle.length);
  const [blogIntroduce, setBlogIntroduce] = useState("my happy life ");
  const [subcharCount, setSubcharCount] = useState(blogIntroduce.length);
  const [isModified, setIsModified] = useState(false);

  const handleblogTitleChange = (e: { target: { value: any } }) => {
    const inputText = e.target.value;
    setBlogTitle(inputText);
    setCharCount(inputText.length);
    setIsModified(true);
  };

  const handleBlogIntroduceChange = (e: { target: { value: any } }) => {
    const inputsubText = e.target.value;
    setBlogIntroduce(inputsubText);
    setSubcharCount(inputsubText.length);
    setIsModified(true);
  };

  const handleSave = () => {
    alert("저장되었습니다.");
    setIsModified(false);
  };

  return (
    <S.BannerBox>
      <S.profileTitle>배너 편집</S.profileTitle>
      <S.profileContentBox>
        <div>
          <S.BannerImg imageurl={backgroundimageurl}>
            <S.TitleContainer>
              <S.TitleBox>{blogTitle}</S.TitleBox>
              <S.SubTitleBox>{blogIntroduce}</S.SubTitleBox>
            </S.TitleContainer>
          </S.BannerImg>
        </div>
      </S.profileContentBox>
      <S.BannerInputBox>
        <S.FirstInputBox>
          <S.InputTitle>블로그 타이틀</S.InputTitle>
          <S.Input
            type="text"
            value={blogTitle}
            onChange={handleblogTitleChange}
          />
          <S.CharCount>{`${charCount}/40`}</S.CharCount>
        </S.FirstInputBox>

        <S.SecondInputBox>
          <S.InputTitle>블로그 소개</S.InputTitle>
          <S.InputIntroduce
            value={blogIntroduce}
            onChange={handleBlogIntroduceChange}
          />
          <S.CharCount>{`${subcharCount}/100`}</S.CharCount>
        </S.SecondInputBox>
      </S.BannerInputBox>
      <S.ButtonBox>
        <S.SaveButton onClick={handleSave} modified={isModified}>
          저장하기
        </S.SaveButton>
      </S.ButtonBox>
    </S.BannerBox>
  );
}
