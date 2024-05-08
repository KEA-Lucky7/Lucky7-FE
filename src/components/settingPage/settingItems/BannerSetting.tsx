import { useState } from "react";
import * as S from "../styles/SettingStyle";
import bannerImage from "../../../assets/setting/BannerImage.png";

export default function BannerSetting() {

    
  //   const [backgroundimageurl, setBackgroundimageurl] =
  //     useState<string>(bannerImage);
  const backgroundimageurl = bannerImage;

  const [blogTitle, setBlogTitle] = useState("나의 일상을 담은 일기장");
  const [charCount, setCharCount] = useState(blogTitle.length);

  const [blogIntroduce, setBlogIntroduce] = useState("my happy life ");
  const [subcharCount, setSubcharCount] = useState(blogIntroduce.length);

  const [isModified, setIsModified] = useState(false); // 수정 여부 상태 추가

  const handleblogTitleChange = (e: { target: { value: any } }) => {
    // React.ChangeEvent<HTMLInputElement>를 사용하지 않아도 됩니다.
    const inputText = e.target.value;
    setBlogTitle(inputText);
    setCharCount(inputText.length);
    setIsModified(true);
  };

  const handleBlogIntroduceChange = (e: { target: { value: any } }) => {
    // React.ChangeEvent<HTMLInputElement>를 사용하지 않아도 됩니다.
    const inputsubText = e.target.value;
    setBlogIntroduce(inputsubText);
    setSubcharCount(inputsubText.length);
    setIsModified(true);
  };

  const handleSave = () => {
    // 저장하기 버튼 클릭 시 처리하는 로직 작성
    alert("저장되었습니다.");
    setIsModified(false); // 저장 후 수정 여부 상태를 false로 변경하여 버튼 비활성화
  };
  return (
    <>
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
        {/* 블로그타이틀 수정 컨테이너 */}
        <S.FirstInputBox>
          <S.InputTitle>블로그 타이틀</S.InputTitle>
          {/* 블로그타이틀 입력 */}
          <S.Input
            type="text"
            value={blogTitle}
            onChange={handleblogTitleChange}
          />
          {/* 글자수 표시 */}
          <S.CharCount>{`${charCount}/40`}</S.CharCount>
        </S.FirstInputBox>

        {/* 블로그소개 수정 컨테이너 */}
        <S.SecondInputBox>
          <S.InputTitle>블로그 소개</S.InputTitle>
          {/* 블로그 소개 입력 */}
          <S.InputIntroduce
            // type="text"
            value={blogIntroduce}
            onChange={handleBlogIntroduceChange}
          />
          {/* 글자수 표시 */}
          <S.CharCount>{`${subcharCount}/100`}</S.CharCount>
        </S.SecondInputBox>
      </S.BannerInputBox>
      <S.ButtonBox>
        <S.SeeButton>미리보기</S.SeeButton>
        <S.SaveButton onClick={handleSave} modified={isModified}>
          저장하기
        </S.SaveButton>
      </S.ButtonBox>
    </>
  );
}
