import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles/MyblogPostCss";
import articleList from "../../assets/myblog/articleList.png";
import pictureList from "../../assets/myblog/pictureList.png";
import blogPosts from "../../data/userBlog/articleListData.json";
import comment from "../../assets/myblog/comment.png";
import heart from "../../assets/myblog/heart.png";
import Titlebackground from "../../assets/myblog/Titlebackground.png";

interface Post {
  id: number;
  content: string;
  category: string;
  tag: string;
  title: string;
  date: string;
  views: number;
}

const MyblogPostList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<"article" | "picture">(
    "article"
  ); // 사진포함 x 글리스트가 기본 셋팅값

  const postsPerPage: number = 15; // 페이지하나당 나타낼 게시글 수

  // 페이지계산로직
  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: Post[] = blogPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  //페이지변환
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  // 사진 or 글 리스트 나열 방식 선택
  const toggleTab = (tab: "article" | "picture"): void => {
    setSelectedTab(tab);
  };

  // 사진 포함 글 정렬 방식
  const renderPictureList = () => (
    <S.PostListContainer>
      {currentPosts.map((post, index) => (
        <Link
          to={`/myblog/${index + 1}`} // post 인덱스를 넘김
          key={index}
          style={{ textDecoration: "none" }}
        >
          <S.PictureListBox key={post.id}>
            <S.PictureList>
              <S.FirstLine>
                <S.PictureListCategory>{post.category}</S.PictureListCategory>
                <S.PictureListTag>#{post.tag}</S.PictureListTag>
              </S.FirstLine>
              <S.PictureListTitle>{post.title}</S.PictureListTitle>
              <S.PictureListContent>{post.content}</S.PictureListContent>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "20px" }}
              >
                <div>{post.date}</div>
                <div>조회 {post.views}</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={comment}
                    alt="댓글"
                    style={{ width: "21px", height: "21px" }}
                  />
                  <div>2</div>
                  <img
                    src={heart}
                    alt="좋아요"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <div>2</div>
                </div>
              </div>
            </S.PictureList>
            <S.PictureBox>
              <img
                src={Titlebackground}
                alt={post.title}
                style={{ width: "100%", height: "100%" }}
              />
            </S.PictureBox>
          </S.PictureListBox>
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
    </S.PostListContainer>
  );

  //사진 제외 글 정렬 방식
  const renderArticleList = () => (
    <S.PostListContainer>
      <S.FieldBox>
        <S.TitleField>제목</S.TitleField>
        <S.DateField>작성일</S.DateField>
        <S.CheckField>조회</S.CheckField>
      </S.FieldBox>
      {currentPosts.map((post, index) => (
        <Link
          to={`/myblog/${index + 1}`} // post 인덱스를 넘김
          key={index}
          style={{ textDecoration: "none", color: "black" }}
        >
          <S.ListBox key={post.id}>
            <S.ListCategory>{post.category}</S.ListCategory>
            <S.ListTag>#{post.tag}</S.ListTag>
            <S.ListTitle>{post.title}</S.ListTitle>
            <S.DateField>{post.date}</S.DateField>
            <S.CheckField>{post.views}</S.CheckField>
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
    </S.PostListContainer>
  );

  return (
    <S.MyblogPostContainer>
      {/* 제목 */}
      <S.Title>전체글보기</S.Title>
      <S.SubTitleContainer>
        <S.SubTitle>{blogPosts.length}개의 글</S.SubTitle>
        {/* 탭 이미지 */}
        <S.IconBox>
          <img
            src={articleList}
            alt="글리스트"
            onClick={() => toggleTab("picture")} // Toggle to 'article' tab when clicked
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              marginRight: "10px",
              opacity: selectedTab === "picture" ? 1 : 0.5,
            }}
          />
          <img
            src={pictureList}
            alt="사진리스트"
            onClick={() => toggleTab("article")} // Toggle to 'article' tab when clicked
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              opacity: selectedTab === "article" ? 1 : 0.5,
            }}
          />
          <S.DropDownMenu></S.DropDownMenu>
        </S.IconBox>
      </S.SubTitleContainer>
      {/* 글 리스트 */}
      {selectedTab === "article" ? renderArticleList() : renderPictureList()}
    </S.MyblogPostContainer>
  );
};

export default MyblogPostList;
