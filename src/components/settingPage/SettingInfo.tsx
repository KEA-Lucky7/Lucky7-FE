import { useState } from "react";
import * as S from "./styles/SettingInfoStyle";
import profile from "../../assets/setting/profile.png";

export default function SettingInfo() {
  const [nickname, setNickname] = useState("홍길동");
  const [charCount, setCharCount] = useState(nickname.length);
  const [introduce, setIntroduce] = useState("hello my name is name 이름의 모아보아");
  const [subcharCount, setSubcharCount] = useState(nickname.length);
  const [isModified, setIsModified] = useState(false);
  const [profileImage, setProfileImage] = useState(profile);

  const handleNicknameChange = (e: { target: { value: any } }) => {
    const inputText = e.target.value;
    setNickname(inputText);
    setCharCount(inputText.length);
    setIsModified(true);
  };

  const handleIntroduceChange = (e: { target: { value: any } }) => {
    const inputsubText = e.target.value;
    setIntroduce(inputsubText);
    setSubcharCount(inputsubText.length);
    setIsModified(true);
  };

  const handleSave = () => {
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