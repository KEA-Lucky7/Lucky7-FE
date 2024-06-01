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

interface LikeResponse {
  postList: LikePost[];
}

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function LikePostList() {
  const query = getQuery();
  const page: number = Number(query.get('page'));
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [loading, setLoading] = useState(false);
  const [likeList, setLikeList] = useState<LikePost[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get<LikeResponse>(`${serverUrl}/posts/like-list`, {
        params: { page: page - 1 }
      });
      setLikeList(response.data.postList);
      setSelectedPosts([]); // 페이지 변경 시 선택된 항목 초기화
      setSelectAll(false); // 페이지 변경 시 전체 선택 초기화
    } catch (error) {
      window.alert('Error:' + error);
    }
    setLoading(false);
  };

  const handleCheckboxChange = (postId: number) => {
    setSelectedPosts(prevSelectedPosts => {
      if (prevSelectedPosts.includes(postId)) {
        return prevSelectedPosts.filter(id => id !== postId);
      } else {
        return [...prevSelectedPosts, postId];
      }
    });
  };

  const handleSelectAllCheckboxChange = () => {
    if (selectAll) {
      setSelectedPosts([]); // Deselect all if already selected
    } else {
      setSelectedPosts(likeList.map(post => post.postId)); // Select all
    }
    setSelectAll(!selectAll); // Toggle selectAll state
  };

  useEffect(() => {
    console.log(selectedPosts);
  }, [selectedPosts]);

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
              <input 
                type='checkbox' 
                checked={selectedPosts.includes(post.postId)} 
                onChange={() => handleCheckboxChange(post.postId)}
              />
              <S.Title>{post.title}</S.Title>
              <S.Item>{post.mainHashtag}</S.Item>
              <S.Item>{post.nickname}</S.Item>
              <S.Item>{post.createdAt}</S.Item>
              <S.Item>{post.likeCnt}</S.Item>
            </S.ListItem>
          ))}
        </S.ListContainer>
      )}
      <S.ButtonContainer>
        <input
          type='checkbox'
          id='selectall'
          checked={selectAll}
          onChange={handleSelectAllCheckboxChange}
        />
        <label htmlFor="selectall">전체 선택</label>
      </S.ButtonContainer>  
      {loading && <p>Loading...</p>}
    </S.SearchContainer>
  );
}
