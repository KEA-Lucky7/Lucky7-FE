import { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import * as S from './styles/LikePostListStyle';

interface LikePost {
  title: string;
  likeCnt: number;
  memberId: number;
  postId: number;
  nickname: string;
  createdAt: string;
  blogId: number;
  thumbnail: string;
  mainHashtag: string;
}

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function LikePostList() {
  const query = getQuery();
  const page = query.get('page');
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [loading, setLoading] = useState(false);
  const [likeList, setLikeList] = useState<LikePost[]>([]);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/posts/like-list`, {
        params: { page: page }
      });
      setLikeList(response.data);
    } catch (error) {
      window.alert('Error:' + error);
    }
    setLoading(false);
  };

  return (
    <S.SearchContainer>
      {likeList.length > 0 && (
        <S.ListContainer>
          <S.ListHeader>
            <S.TitleHeader>제목</S.TitleHeader>
            <S.Item>메인 해시태그</S.Item>
            <S.Item>작성자</S.Item>
            <S.Item>작성일</S.Item>
            <S.Item>좋아요</S.Item>
          </S.ListHeader>
          {likeList.map((post, index) => (
            <S.ListItem key={index}>
              <S.Title>{post.title}</S.Title>
              <S.Item>{post.mainHashtag}</S.Item>
              <S.Item>{post.nickname}</S.Item>
              <S.Item>{post.createdAt}</S.Item>
              <S.Item>{post.likeCnt}</S.Item>
            </S.ListItem>
          ))}
        </S.ListContainer>
      )}
      {loading && <p>Loading...</p>}
    </S.SearchContainer>
  );
}
