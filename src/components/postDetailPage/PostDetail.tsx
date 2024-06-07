import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStore } from "../homePage/login/state";
import { Link, useParams } from "react-router-dom";

import * as S from "./styles/PostDetailCss";
import seeMore from "../../assets/postDetail/seeMore.png";
import report from "../../assets/postDetail/report.png";
import postComment from "../../assets/postDetail/postComment.png";
import postHeart from "../../assets/postDetail/postHeart.png";
import seeMoreComment from "../../assets/postDetail/seeMoreComment.png";
import profileImage from "../../assets/postDetail/profileImage.png";
import Top from "../../assets/postDetail/Top.png";
import deletebutton from "../../assets/postDetail/deletebutton.png";
import postEdit from "../../assets/postDetail/postEdit.png";
import ConfirmModal from "./ConfirmModal";
import EditPostForm from "./EditPostForm";
import CommentComp from "./comment/CommentComp";


interface Post {
  postId: number;
  memberId: number;
  nickname: string;
  profileImg: string;
  about: string;
  title: string;
  content: string;
  preview: string;
  thumbnail: string;
  postType: string;
  mainHashtag: string;
  createdAt: string;
  commentCnt: number;
  likeCnt: number;
  isLiked: boolean;
  hashtagList: string[];
  walletList: {
    consumedDate: string;
    walletType: string;
    memo: string;
    amount: number;
  }[];
  commentList: {
    commentId: number;
    memberId: number;
    nickname: string;
    profileImg: string;
    content: string;
    createdAt: string;
    replyList: {
      content: string;
      memberId: string;
      nickname: string;
      profileImg: string;
      createdAt: string;
      commentId: number;
      replyId: number;
    }[];
  }[];
  postList: {
    memberId: number;
    createdAt: string;
    commentCnt: number;
    postId: number;
    title: string;
  }[];
}

export default function PostDetail() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post>({} as Post);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { accessToken } = useStore();

  //글 상세조회 API
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${serverUrl}/posts/${postId}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data: Post = await response.json();
        setPost(data);
        console.log(accessToken);
        console.log(data.commentList)
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [postId]);

  //좋아요 누르는 API
  const handleLikeClick = async () => {
    try {
      await axios.post(`${serverUrl}/posts/${postId}/like`, null, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      setLikeCount(likeCount + 1); // 좋아요 증가
      alert("좋아요를 눌렀습니다.");
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  //글 삭제 API
  const handleDelete = async () => {
    try {
      const response = await fetch(`${serverUrl}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      if (response.ok) {
        alert("성공적으로 삭제되었습니다.");
        navigate("/myblog");
      } else {
        alert("삭제에 실패하였습니다.");
      }
    } catch (error) {
      console.error("Error deleting the post:", error);
      alert("삭제를 하는 과정 중 에러가 발생하였습니다.");
    } finally {
      setIsModalVisible(false);
    }
  };

  // 글 수정 API
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = (updatedPost: Post) => {
    setPost(updatedPost);
    setIsEditing(false);
  };

  const toggleCommentVisibility = () => {
    setIsCommentVisible(!isCommentVisible);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCopyURL = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("URL이 클립보드에 복사되었습니다.");
      })
      .catch(() => {
        alert("복사에 실패하였습니다.");
      });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  return (
    <>
      {isEditing ? (
        <EditPostForm
          post={post}
          onSubmit={handleEditSubmit}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <S.Container>
            {/* 사진 & 사진 안 텍스트 */}
            <S.Picturecontainer imageUrl={post.thumbnail}>
              <S.TextBox>
                <S.FirstLine>
                  <div>{post.postType}</div>
                  <div>#{post.mainHashtag}</div>
                </S.FirstLine>
                <S.SecondLine>
                  <div>{post.title}</div>
                </S.SecondLine>
                <S.ThirdLine>
                  <div>by {post.nickname}</div>
                  <div>{post.createdAt}</div>
                </S.ThirdLine>
              </S.TextBox>
            </S.Picturecontainer>
          </S.Container>

          {/* 본문 시작*/}
          <S.PostContainer>
            {/* 본문 맨 위 내용 */}
            <S.PostIntro>
              <S.FuncContainer style={{ position: "relative" }}>
                <div onClick={handleCopyURL}>URL 복사</div>
                <img
                  src={seeMore}
                  alt="더보기"
                  style={{ width: "3px", height: "15px", cursor: "pointer" }}
                  onClick={toggleDropdown}
                />
                {/* 드롭다운 메뉴 내용 */}
                {isDropdownVisible && (
                  <div
                    style={{
                      position: "absolute",
                      top: "20px", // 이미지를 기준으로 약간의 간격을 둠
                      right: "0",
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                      zIndex: 1000,
                      columnGap: "10px",
                    }}
                  >
                    {/* 신고버튼 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        justifyContent: "left",
                        alignItems: "center",
                        width: "100px",
                        cursor: "pointer",
                        marginBottom: "10px",
                      }}
                    >
                      <img
                        src={report}
                        alt="신고"
                        style={{ width: "24px", height: "24px" }}
                      />
                      신고하기
                    </div>

                    {/* 수정버튼 */}
                    <div
                      onClick={handleEditClick}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        justifyContent: "left",
                        alignItems: "center",
                        width: "100px",
                        cursor: "pointer",
                        marginBottom: "10px",
                      }}
                    >
                      <img
                        src={postEdit}
                        alt="신고"
                        style={{ width: "24px", height: "24px" }}
                      />
                      수정
                    </div>

                    {/* 삭제버튼 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        justifyContent: "left",
                        alignItems: "center",
                        width: "100px",
                        cursor: "pointer",
                      }}
                      onClick={() => setIsModalVisible(true)}
                    >
                      <img
                        src={deletebutton}
                        alt="Delete"
                        style={{ width: "24px", height: "24px" }}
                      />
                      삭제
                    </div>

                    {/* Confirmation Modal */}
                    <ConfirmModal
                      isVisible={isModalVisible}
                      onConfirm={handleDelete}
                      onCancel={() => setIsModalVisible(false)}
                    />
                  </div>
                )}
              </S.FuncContainer>
            </S.PostIntro>

            {/* 본문 내용 */}
            <S.PostBox>
              <div>{post.content}</div>
            </S.PostBox>

            {/* Wallet List */}
            <div>
              <S.WalletListBox>
                {post.walletList && post.walletList.length > 0 && (
                  <div>
                    {post.walletList.map((walletItem, index) => (
                      <S.WalletItem key={index}>
                        <div>날짜: {walletItem.consumedDate}</div>
                        <div>메모: {walletItem.memo}</div>
                        <div>금액: {walletItem.amount}</div>
                        <div>타입: {walletItem.walletType}</div>
                      </S.WalletItem>
                    ))}
                  </div>
                )}
              </S.WalletListBox>
            </div>

            {/* 태그 내용 */}
            <S.TagBox>
              <S.FirstTag>#{post.mainHashtag}</S.FirstTag>
              {post.hashtagList && post.hashtagList.length > 0 && (
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  {post.hashtagList.map((tag, index) => (
                    <S.SecondTag key={index}>#{tag}</S.SecondTag>
                  ))}
                </div>
              )}
            </S.TagBox>

            {/* 댓글 내용 */}
            <S.CommentBox>
              <S.Commment>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={postComment}
                    alt="댓글"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <div>댓글 {post.commentCnt}</div>
                  <img
                    src={seeMoreComment}
                    alt="더보기"
                    style={{ width: "16px", height: "7px" }}
                    onClick={toggleCommentVisibility}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={postHeart}
                    alt="하트"
                    style={{ width: "25px", height: "22px", cursor: "pointer" }}
                    onClick={handleLikeClick}
                  />
                  <div>{post.likeCnt}</div>
                </div>
              </S.Commment>
              {isCommentVisible && (
                <CommentComp commentList={post.commentList}/>
              )}
            </S.CommentBox>
          </S.PostContainer>

          {/* 마이프로필 내용 */}
          <S.profileBox>
            <S.PictureBox>
              <img
                src={profileImage}
                alt="배경사진"
                style={{ width: "123px", height: "123px" }}
              />
            </S.PictureBox>
            <S.ContentBox>
              <div style={{ fontWeight: "bold" }}>{post.nickname}'s Blog</div>
              <div>{post.about}</div>
            </S.ContentBox>
          </S.profileBox>

          {/* 글 리스트 내용 */}
          {post.postList && post.postList.length > 0 && (
            <S.postDetailList>
              <S.postDetailListTitle>다른 글</S.postDetailListTitle>
              <S.postDetailListBox>
                {post.postList.map((postItem, index) => (
                  <Link
                    to={`/myblog/${postItem.postId}`}
                    key={index}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      width: "33vw",
                    }}
                  >
                    <S.ListBox key={postItem.postId}>
                      <S.ListTitle>{postItem.title}</S.ListTitle>
                      <S.CheckField>{postItem.createdAt}</S.CheckField>
                    </S.ListBox>
                  </Link>
                ))}
              </S.postDetailListBox>
            </S.postDetailList>
          )}

          {/* 위로 가기 */}
          <S.TopBox onClick={scrollToTop}>
            <img
              src={Top}
              alt="위로가기"
              style={{ width: "16px", height: "12px" }}
            />
            <div>Top</div>
          </S.TopBox>
        </>
      )}
    </>
  );
}
