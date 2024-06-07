import * as S from "./styles/SettingStyle";
import SettingBanner from "./SettingBanner";
import Alert from "./settingItems/Alert";
import SettingAccount from "./SettingAccount";
import SettingInfo from "./SettingInfo";

export default function Setting() {
  return (
    <S.SettingBackGround>
      <S.SettingContainer>
        <S.Title>설정</S.Title>
        <SettingAccount />
        <SettingInfo />
        <SettingBanner />
        <Alert />
        <S.Secede>탈퇴하기</S.Secede>
      </S.SettingContainer>
    </S.SettingBackGround>
  );
}
