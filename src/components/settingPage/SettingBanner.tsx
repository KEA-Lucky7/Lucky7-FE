import { useState } from "react";
import * as S from "./styles/SettingBannerStyle";
import bannerImg from "../../assets/setting/BannerImage.png";

export default function SettingBanner() {
    
  // const [backgroundimageurl, setBackgroundimageurl] = useState<string>(bannerImage);
  // const backgroundimageurl = bannerImage;

  const [blogTitle, setBlogTitle] = useState("나의 일상을 담은 일기장");
  const [charCount, setCharCount] = useState(blogTitle.length);
  const [blogIntroduce, setBlogIntroduce] = useState("my happy life ");
  const [subcharCount, setSubcharCount] = useState(blogIntroduce.length);
  const [isModified, setIsModified] = useState(false);
  const [bannerImage, setBannerImage] = useState(bannerImg);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result as string);
        setIsModified(true);
      };
      reader.readAsDataURL(file);
    }
    window.alert(bannerImage)
  };

  const handleSave = () => {
    alert("저장되었습니다.");
    setIsModified(false);
  };

  return (
    <S.BannerBox>
      <S.profileTitle>배너 편집</S.profileTitle>
      <S.profileContentBox>
        <label htmlFor="bannerUpload">
          <S.ImgInput
            id="bannerUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <S.BannerImg src={bannerImage} alt="사진"/>
        </label>
      </S.profileContentBox>
      <S.BannerInputBox>
        <S.InputTitle>블로그 타이틀</S.InputTitle>
        <S.NameInput
          type="text"
          value={blogTitle}
          onChange={handleblogTitleChange}
          />
        <S.CharCount>{`${charCount}/40`}</S.CharCount>
        <S.InputTitle>블로그 소개</S.InputTitle>
        <S.IntroInput
          value={blogIntroduce}
          onChange={handleBlogIntroduceChange}
          />
        <S.CharCount>{`${subcharCount}/100`}</S.CharCount>
      </S.BannerInputBox>
      <S.SaveButton onClick={handleSave} modified={isModified.toString()}>
        저장하기
      </S.SaveButton>
    </S.BannerBox>
  );
}
