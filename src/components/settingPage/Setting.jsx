import * as S from './styles/SettingStyle';
import profile from '../../assets/setting/profile.png';
import React, { useState } from 'react';
import BannerSetting from './settingItems/BannerSetting';
import Alert from './settingItems/Alert';

export default function Setting() {
  const [nickname, setNickname] = useState('홍길동');
  const [charCount, setCharCount] = useState(nickname.length);

  const [introduce, setIntroduce] = useState('hello my name is name 이름의 모아보아');
  const [subcharCount, setSubcharCount] = useState(nickname.length);

  const [isModified, setIsModified] = useState(false); // 수정 여부 상태 추가

  const handleNicknameChange = (e) => { // React.ChangeEvent<HTMLInputElement>를 사용하지 않아도 됩니다.
    const inputText = e.target.value;
    setNickname(inputText);
    setCharCount(inputText.length);
    setIsModified(true);
  };

  const handleIntroduceChange = (e) => { // React.ChangeEvent<HTMLInputElement>를 사용하지 않아도 됩니다.
    const inputsubText = e.target.value;
    setIntroduce(inputsubText);
    setSubcharCount(inputsubText.length);
    setIsModified(true);
  };

  const handleSave = () => {
    // 저장하기 버튼 클릭 시 처리하는 로직 작성
    alert('저장되었습니다.');
    setIsModified(false); // 저장 후 수정 여부 상태를 false로 변경하여 버튼 비활성화
  };


  return (
    <S.TotalContainer>
      {/* 맨 위 설정 타이틀 */}
      <S.Title>설정</S.Title>
      {/* 계정 관련 컴포넌트 */}
      <S.AccountBox>
        <S.FirstLine>
          <S.Text>계정</S.Text>
          <S.Text2> ㅣ 계정 관리</S.Text2>
        </S.FirstLine>
        <S.SecondLine>
          <S.SecondText>구글</S.SecondText>
          <S.EmailText>kiss970322@gmail.com</S.EmailText>
        </S.SecondLine>
      </S.AccountBox>

      {/* 프로필 편집 컨테이너 */}
      <S.profileBox>
        <S.profileTitle>프로필 편집</S.profileTitle>

        <S.profileContentBox>
          {/*사진 들어가는 자리 */}
          <div>
            <S.Img src={profile} alt='사진' />
          </div>
          <S.InputBox>
            {/* 닉네임 수정 컨테이너 */}
            <S.FirstInputBox>
              <S.InputTitle>닉네임</S.InputTitle>
              {/* 닉네임 입력 */}
              <S.Input
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
              />
              {/* 글자수 표시 */}
              <S.CharCount>{`${charCount}/20`}</S.CharCount>
            </S.FirstInputBox>

            {/* 소개 수정 컨테이너 */}
            <S.SecondInputBox>
              <S.InputTitle>소개</S.InputTitle>
              {/* 닉네임 입력 */}
              <S.InputIntroduce
                type="text"
                value={introduce}
                onChange={handleIntroduceChange}
              />
              {/* 글자수 표시 */}
              <S.CharCount>{`${subcharCount}/20`}</S.CharCount>
            </S.SecondInputBox>
          </S.InputBox>
        </S.profileContentBox>
        {/* 저장버튼 */}
        <S.SaveButton onClick={handleSave}  modified={isModified ? "true" : undefined}>
          저장하기
        </S.SaveButton>
      </S.profileBox>

      {/* 배너 편집 컨테이너 */}
      <S.BannerBox>
        <BannerSetting />
      </S.BannerBox>

      {/* 알림설정 컨테이너 */}
      <S.AlertBox>
        <Alert />
      </S.AlertBox>

      <S.SecedeBox>
        <S.Secede>
          탈퇴하기
        </S.Secede>
      </S.SecedeBox>
    </S.TotalContainer>
  )
}
