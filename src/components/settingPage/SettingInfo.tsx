import { useEffect, useState } from "react";
import * as S from "./styles/SettingInfoStyle";
import profile from "../../assets/setting/profile.png";
import axios from "axios";
import { useStore, useUserStore } from "../homePage/login/state";

export default function SettingInfo() {
  const [nickname, setNickname] = useState("닉네임");
  const [charCount, setCharCount] = useState(nickname.length);
  const [introduce, setIntroduce] = useState("소개");
  const [subcharCount, setSubcharCount] = useState(nickname.length);
  const [isModified, setIsModified] = useState(false);
  const [profileImage, setProfileImage] = useState(profile);
  const { accessToken } = useStore();
  const { userInfo, setUserInfo } = useUserStore();
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const storedUserInfo = JSON.parse(userInfo)
    console.log(storedUserInfo);
    setNickname(storedUserInfo.nickname)
    setIntroduce(storedUserInfo.about)
  }, [userInfo]);

  const modifyUser = async () => {
    try {
      const response = await axios.patch(`${serverUrl}/member/${accessToken}`, {
        nickname,
        birth: "2001-01-01",
        profileImage,
        introduce
      });
      console.log(response.data)
      const data = response.data.data;
      const strJson = JSON.stringify({id: data.id, nickname: data.nickname, about: data.about})
      setUserInfo(strJson);
      console.log(strJson)
    } catch (error) {
      window.alert('Error:' + error);
    }
  };

  const handleNicknameChange = (e: { target: { value: string } }) => {
    const inputText = e.target.value;
    setNickname(inputText);
    setCharCount(inputText.length);
    setIsModified(true);
  };

  const handleIntroduceChange = (e: { target: { value: string } }) => {
    const inputsubText = e.target.value;
    setIntroduce(inputsubText);
    setSubcharCount(inputsubText.length);
    setIsModified(true);
  };

  const handleSave = () => {
    modifyUser()
    alert("저장되었습니다.");
    setIsModified(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        setIsModified(true);
      };
      reader.readAsDataURL(file);
    }
    window.alert(profileImage)
  };

  return (
    <S.profileBox>
      <S.profileTitle>프로필 편집</S.profileTitle>
      <S.profileContentBox>
        <label htmlFor="imgUpload">
          <S.ImgInput
            id="imgUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <S.Img src={profileImage} alt="사진" />
        </label>
        <S.InputContainer>
          <S.InputTitle>닉네임</S.InputTitle>
          <S.NameInput
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <S.CharCount>{`${charCount}/20`}</S.CharCount>

          <S.InputTitle>소개</S.InputTitle>
          <S.IntroInput
            value={introduce}
            onChange={handleIntroduceChange}
          />
          <S.CharCount>{`${subcharCount}/20`}</S.CharCount>
        </S.InputContainer>
      </S.profileContentBox>
      <S.SaveButton onClick={handleSave} modified={isModified.toString()}>
        저장하기
      </S.SaveButton>
    </S.profileBox>
  );
}