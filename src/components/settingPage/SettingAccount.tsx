import * as S from "./styles/SettingAccountStyle";
import kakao from "../../assets/setting/kakao.png";

export default function SettingAccount() {
  return (
    <S.AccountContainer>
      <S.AccountSettingSelection>
        <S.Account>계정</S.Account>
        <S.AccountSetting>계정 관리</S.AccountSetting>
      </S.AccountSettingSelection>
      <S.AccountList>
        <S.AccountIcon>
          <img
            src={kakao}
            style={{ scale: "40%", width: "20px", height: "20px" }}
          />
        </S.AccountIcon>
        <S.AccountEmail>kiss970322@gmail.com</S.AccountEmail>
      </S.AccountList>
    </S.AccountContainer>
  );
}
