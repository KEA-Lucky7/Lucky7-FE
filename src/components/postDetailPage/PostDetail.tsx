import React, { useState } from 'react';
import * as S from "./styles/PostDetailCss";
import postDetailbackground from "../../assets/postDetail/postDetailbackground.png";
import seeMore from "../../assets/postDetail/seeMore.png";
import report from "../../assets/postDetail/report.png";

export default function PostDetail() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCopyURL = () => {
    // 페이지 URL을 클립보드에 복사하는 코드
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('URL이 클립보드에 복사되었습니다.');
      })
      .catch((err) => {
        console.error('URL 복사에 실패했습니다:', err);
      });
  };
  return (
    <>
      <S.Container>
        {/* 사진 & 사진 안 텍스트 */}
        <S.Picturecontainer imageUrl={postDetailbackground}>
          <S.TextBox>
            <S.FirstLine>
              <div>자유글</div>
              <div>#대표태그</div>
            </S.FirstLine>
            <S.SecondLine>
              <div>내가 좋아하는 베이글 뿌시고 옴</div>
            </S.SecondLine>
            <S.ThirdLine>
              <div>by name</div>
              <div>2024.04.14</div>
            </S.ThirdLine>
          </S.TextBox>
        </S.Picturecontainer>
      </S.Container>

      {/* 본문 맨 위 내용 */}
      <S.PostBox>
        <div onClick={handleCopyURL}>URL 복사</div>
        <img src={seeMore} alt='더보기' style={{ width: '3px', height: '19px' }} onClick={toggleDropdown} />
        {/* 드롭다운 메뉴 내용 */}
        {isDropdownVisible && (
          <div style={{ position: 'absolute', top: '520px', right: '285px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
              신고하기
              <img src={report} alt='신고' style={{ width: '24px', height: '24px' }} />
            </div>
          </div>
        )}
      </S.PostBox>
    </>
  )
}
