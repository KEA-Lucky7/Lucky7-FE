import { useEffect, useState } from "react";
import * as S from "./styles/SettingBannerStyle";
import bannerImg from "../../assets/setting/BannerImage.png";
import { useStore, useBlogStore } from "../homePage/login/state";
import axios from "axios";

export default function SettingBanner() {
    
  // const [backgroundimageurl, setBackgroundimageurl] = useState<string>(bannerImage);
  // const backgroundimageurl = bannerImage;

  const [blogTitle, setBlogTitle] = useState("블로그 타이틀");
  const [charCount, setCharCount] = useState(blogTitle.length);
  const [blogIntroduce, setBlogIntroduce] = useState("블로그 소개");
  const [subcharCount, setSubcharCount] = useState(blogIntroduce.length);
  const [isModified, setIsModified] = useState(false);
  const [bannerImage, setBannerImage] = useState(bannerImg);
  const { accessToken } = useStore();
  const { blogInfo, setBlogInfo } = useBlogStore();
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const storedBlogInfo = JSON.parse(blogInfo)
    console.log(storedBlogInfo);
    setBlogTitle(storedBlogInfo.blogName)
    setBlogIntroduce(storedBlogInfo.about)
  }, [blogInfo]);

  const modifyBlog = async () => {
    try {
      const response = await axios.patch(`${serverUrl}/blog/${accessToken}`, {
        name: blogTitle,
        about: blogIntroduce,
        bannerImage
      });
      console.log(response.data)
      const strJson = JSON.stringify({blogName: blogTitle, about : blogIntroduce, headerImage : bannerImage})
      setBlogInfo(strJson);
      console.log(strJson)
    } catch (error) {
      window.alert('Error:' + error);
    }
  };

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
    modifyBlog()
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
