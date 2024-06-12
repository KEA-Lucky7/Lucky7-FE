import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

import * as S from './styles/LikePostListStyle';
import { useStore } from '../login/state';

interface LikePost {
  blogId: number;
  commentCnt: number;
  createdAt: string;
  likeCnt: number;
  mainHashtag: string;
  memberId: number;
  nickname: string;
  postId: number;
  thumbnail: string;
  title: string;
}

interface LikeResponse {
  postList: LikePost[];
}

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function LikePostList() {
  const query = getQuery();
  const navigate = useNavigate();
  const page: number = Number(query.get('page'));
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [loading, setLoading] = useState(false);
  const [likeList, setLikeList] = useState<LikePost[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const { accessToken } = useStore();

  useEffect(() => {
    fetchLike();
  }, [page]);

  const fetchLike = async () => {
    setLoading(true);
    try {
      const response = await axios.get<LikeResponse>(`${serverUrl}/posts/like-list`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
        params: { page: page - 1 }
      });
      setLikeList(response.data.postList);
      console.log(response)
      setSelectedPosts([]);
      setSelectAll(false);
    } catch (error) {
      window.alert('Error:' + error);
    }
    setLoading(false);
  };

  const deleteLike = async () => {
    setLoading(true);
    try {
      const response = await axios.patch<LikeResponse>(`${serverUrl}/posts/like-list`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        postIdList: selectedPosts
      });
      window.alert(response.data);
      setSelectedPosts([]);
      setSelectAll(false);
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
      setSelectedPosts([]); 
    } else {
      setSelectedPosts(likeList.map(post => post.postId)); 
    }
    setSelectAll(!selectAll); 
  };

  const handleDeleteLike = () => {
    const hide = window.confirm("선택한 글의 좋아요를 취소하시겠습니까?");
    if (hide) {
      deleteLike();
    }
  }

  const handleClickItem = (blogId: number, postId: number) =>{
    navigate(`/blog/${blogId}/${postId}`)
  }

  return (
    <S.PostContainer>
        <S.ListContainer>
          <S.ListHeader>
            <div style={{ width: '47px' }}></div>
            <S.TitleHeader>제목</S.TitleHeader>
            <S.Item></S.Item>
            <S.Item>작성자</S.Item>
            <S.Item>작성일</S.Item>
            <S.Item>좋아요</S.Item>
          </S.ListHeader>
          {loading ? (
            <p>Loading...</p>
          ) : (
            likeList.map((post, index) => (
              <S.ListItem key={index} onClick={() => handleClickItem(post.blogId, post.postId)}>
                <S.CheckBox
                  type='checkbox' 
                  checked={selectedPosts.includes(post.postId)} 
                  onChange={() => handleCheckboxChange(post.postId)}
                  onClick={(e) => e.stopPropagation()}
                />
                <S.Title>{post.title}</S.Title>
                <S.Item>{post.mainHashtag}</S.Item>
                <S.Item>{post.nickname}</S.Item>
                <S.Item>{post.createdAt}</S.Item>
                <S.Item>{post.likeCnt}</S.Item>
              </S.ListItem>
            ))
          )}
        </S.ListContainer>
      <S.ButtonContainer>
        <S.CheckBox
          type='checkbox'
          id='selectall'
          checked={selectAll}
          onChange={handleSelectAllCheckboxChange}
        />
        <label htmlFor="selectall">전체 선택</label>
        <S.DeleteLikeBtn onClick={handleDeleteLike}>삭제하기</S.DeleteLikeBtn>
      </S.ButtonContainer>  
      {loading && <p>Loading...</p>}
    </S.PostContainer>
  );
}
