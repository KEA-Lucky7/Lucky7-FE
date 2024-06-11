import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles/MyblogPostCss";
import articleList from "../../assets/myblog/articleList.png";
import pictureList from "../../assets/myblog/pictureList.png";
import comment from "../../assets/myblog/comment.png";
import heart from "../../assets/myblog/heart.png";
import axios from "axios";
import { useStore, useBlogIdStore, useUserStore } from "../homePage/login/state";

interface Post {
  id: number;
  content: string;
  category: string;
  tag: string;
  title: string;
  date: string;
  views: number;
  mainHashtag: string;
  postType: string;
  createdAt: string;
  commentCnt: number;
  likeCnt: number;
  preview: string;
  thumbnail: string;
  postId: number;
}

const MyblogPostList: React.FC = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<"article" | "picture">(
    "article"
  );
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const postsPerPage = 15;

  const { accessToken } = useStore();
  const { myBlogId } = useBlogIdStore();
  const { userInfo } = useUserStore();
  const storedUserInfo = JSON.parse(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/posts/${myBlogId}/post-list?postType=ALL&hashtag=ALL&page=0`, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setBlogPosts(response.data.postList || []); // Ensure it is an array
        console.log(storedUserInfo);
        console.log(accessToken);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleTab = (tab: "article" | "picture") => setSelectedTab(tab);

  const renderPagination = () => (
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
  );

  const renderPictureList = () => (
    <S.PostListContainer>
      {currentPosts.map((post) => (
        <Link
          to={`/blog/${myBlogId}/${post.postId}`}
          key={post.postId}
          style={{ textDecoration: "none", color: "black" }}
        >
          <S.PictureListBox>
            <S.PictureList>
              <S.FirstLine>
                <S.PictureListCategory>{post.postType}</S.PictureListCategory>
                <S.PictureListTag>#{post.mainHashtag}</S.PictureListTag>
              </S.FirstLine>
              <S.PictureListTitle>{post.title}</S.PictureListTitle>
              <S.PictureListContent>{post.preview}</S.PictureListContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  marginTop: "10px",
                }}
              >
                <div>{post.createdAt}</div>
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
                  <div>{post.commentCnt}</div>
                  <img
                    src={heart}
                    alt="좋아요"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <div>{post.likeCnt}</div>
                </div>
              </div>
            </S.PictureList>
            <S.PictureBox>
              <img
                src={post.thumbnail}
                alt={post.title}
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
            </S.PictureBox>
          </S.PictureListBox>
        </Link>
      ))}
      {renderPagination()}
    </S.PostListContainer>
  );

  const renderArticleList = () => (
    <S.PostListContainer>
      <S.FieldBox>
        <S.ItemField>유형</S.ItemField>
        <S.ItemField>해시태그</S.ItemField>
        <S.TitleField>제목</S.TitleField>
        <S.ItemField>작성일</S.ItemField>
        <S.ItemField>댓글</S.ItemField>
      </S.FieldBox>
      <div>
        {currentPosts.map((post) => (
          <Link
            to={`/blog/${myBlogId}/${post.postId}`}
            key={post.postId}
            style={{ textDecoration: "none", color: "black" }}
          >
            <S.ListBox>
              <S.ListCategory>{post.postType}</S.ListCategory>
              <S.ListTag>#{post.mainHashtag}</S.ListTag>
              <S.ListTitle>{post.title}</S.ListTitle>
              <S.ItemField>{post.createdAt}</S.ItemField>
              <S.ItemField>{post.commentCnt}</S.ItemField>
            </S.ListBox>
          </Link>
        ))}
      </div>
      {renderPagination()}
    </S.PostListContainer>
  );

  return (
    <S.MyblogPostContainer>
      <S.Title>전체글보기</S.Title>
      <S.SubTitleContainer>
        <S.SubTitle>{blogPosts.length}개의 글</S.SubTitle>
        <S.IconBox>
          <img
            src={articleList}
            alt="글리스트"
            onClick={() => toggleTab("picture")}
            style={{
              width: "15px",
              height: "15px",
              cursor: "pointer",
              marginRight: "10px",
              opacity: selectedTab === "picture" ? 1 : 0.5,
            }}
          />
          <img
            src={pictureList}
            alt="사진리스트"
            onClick={() => toggleTab("article")}
            style={{
              width: "15px",
              height: "15px",
              cursor: "pointer",
              opacity: selectedTab === "article" ? 1 : 0.5,
            }}
          />
        </S.IconBox>
      </S.SubTitleContainer>
      {/* 글 리스트 */}
      {blogPosts.length === 0 ? (
        <S.NoPostsMessage>게시글이 없습니다.</S.NoPostsMessage>
      ) : selectedTab === "article" ? (
        renderArticleList()
      ) : (
        renderPictureList()
      )}
    </S.MyblogPostContainer>
  );
};

export default MyblogPostList;
