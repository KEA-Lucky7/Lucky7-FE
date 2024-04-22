import React, { useState } from 'react';
import * as S from "./styles/PostDetailCss";
import postDetailbackground from "../../assets/postDetail/postDetailbackground.png";
import seeMore from "../../assets/postDetail/seeMore.png";
import report from "../../assets/postDetail/report.png";
import postPicture from "../../assets/postDetail/postPicture.png";
import { postContentData } from "../../data/userBlog/postContentData";
import postComment from "../../assets/postDetail/postComment.png";
import postHeart from "../../assets/postDetail/postHeart.png";
import seeMoreComment from "../../assets/postDetail/seeMoreComment.png";
import profileImage from "../../assets/postDetail/profileImage.png";
import blogPosts from "../../data/userBlog/articleListData.json";
import { Link } from "react-router-dom";
import Top from "../../assets/postDetail/Top.png";
import InputComment from "./comment/InputComment";

interface Post {
  id: number;
  content: string;
  category: string;
  tag: string;
  title: string;
  date: string;
  views: number;
}

export default function PostDetail() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const postsPerPage: number = 5; // 페이지하나당 나타낼 게시글 수

  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: Post[] = blogPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const toggleCommentVisibility = () => {
    setIsCommentVisible(!isCommentVisible); // 상태를 반전시켜 댓글 보이기 여부를 토글합니다.
  };

  //페이지변환
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // 부드럽게 스크롤
    });
  };

  const handleCommentSubmit = () => {

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

      {/* 본문 시작*/}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* 본문 맨 위 내용 */}
        <S.PostIntro>
          <div onClick={handleCopyURL}>URL 복사</div>
          <img src={seeMore} alt='더보기' style={{ width: '3px', height: '19px' }} onClick={toggleDropdown} />
          {/* 드롭다운 메뉴 내용 */}
          {isDropdownVisible && (
            <div style={{ position: 'absolute', top: '520px', right: '670px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                신고하기
                <img src={report} alt='신고' style={{ width: '24px', height: '24px' }} />
              </div>
            </div>
          )}
        </S.PostIntro>

        {/* 본문 내용 */}
        <S.PostBox>
          <img src={postPicture} alt='본문사진' style={{ width: '100%', height: '600px' }} />
          {postContentData.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </S.PostBox>

        {/* 태그 내용 */}
        <S.TagBox>
          <S.FirstTag>#대표태그</S.FirstTag>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <S.SecondTag>
              #서브태그
            </S.SecondTag>
            <S.SecondTag>
              #서브태그
            </S.SecondTag>
            <S.SecondTag>
              #서브태그
            </S.SecondTag>
          </div>
        </S.TagBox>

        {/* 댓글 내용 */}
        <S.CommentBox>
          <S.Commment>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center' }}>
              <img src={postComment} alt='댓글' style={{ width: '25px', height: '25px' }} />
              <div>댓글 2</div>
              <img src={seeMoreComment} alt='더보기' style={{ width: '16px', height: '7px' }} onClick={toggleCommentVisibility} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center' }}>
              <img src={postHeart} alt='하트' style={{ width: '25px', height: '22px' }} />
              <div>2</div>
            </div>
          </S.Commment>
          {
            isCommentVisible && <InputComment
              className="custom-input"
              placeholder="댓글을 입력하세요..."
              onClick={handleCommentSubmit}
            />
          }
        </S.CommentBox>
      </div>

      {/* 마이프로필 내용 */}
      <S.CommentBox>
        <S.PictureBox>
          <img src={profileImage} alt='배경사진' style={{ width: '123px', height: '123px' }} />
        </S.PictureBox>
        <S.ContentBox>
          <div style={{ fontWeight: 'bold' }}>정환's Blog</div>
          <div>안녕 내 이름은 최정환이야</div>
        </S.ContentBox>
      </S.CommentBox>

      {/* 글리스트 내용 */}
      <S.postDetailList>
        <S.postDetailListTitle>전체글</S.postDetailListTitle>
        <S.postDetailListBox>
          {currentPosts.map((post, index) => (
            <Link
              to={`/myblog/${index + 1}`} // post 인덱스를 넘김
              key={index}
              style={{ textDecoration: "none", color: "black" }}
            >
              <S.ListBox key={post.id}>
                <S.ListTitle>{post.title}</S.ListTitle>
                <S.CheckField>{post.date}</S.CheckField>
              </S.ListBox>
            </Link>
          ))}
          {/* 페이지네이션 */}
          <S.PaginationBox>
            {[...Array(Math.ceil(blogPosts.length / postsPerPage)).keys()].map(
              (pageNumber) => (
                <S.PageNumber
                  key={pageNumber}
                  onClick={() => paginate(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </S.PageNumber>
              )
            )}
          </S.PaginationBox>
        </S.postDetailListBox>
      </S.postDetailList>

      {/* 위로 가기 */}
      <S.TopBox onClick={scrollToTop}>
        <img src={Top} alt='위로가기' style={{ width: '16px', height: '12px' }} />
        <div>Top</div>
      </S.TopBox>
    </>
  )
}
