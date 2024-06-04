import { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

import basicImg from '../../../src/assets/profile/profile.png';
import * as S from "./styles/SearchPostStyle";

interface Post {
  postId: number,
  postTitle: string,
  postPreview: string,
  postedDAte: string,
  postThumbnailUrl: string
  repHashTag: string,
  postOwnerName: string,
  postOwnerImageUrl: string
}

interface PostResponse {
  content: Post[];
}

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPost() {
  const query = getQuery();
  const keyword = query.get('q');
  const sort = query.get('sort') || 'likeDESC';
  const startDate = query.get('startDate') || '1900-01-01';
  const endDate = query.get('endDate') || '2999-12-31';

  const serverUrl = import.meta.env.VITE_SERVER_URL;
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0, 
    });

    const observerTarget = document.getElementById("observer");
    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);

  const fetchPosts = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get<PostResponse>(`${serverUrl}/search/post`, {
        params: { value: keyword, startDate: startDate, endDate:endDate, page, size: 6, order: sort}
      });
      const newPosts = response.data.content;
      console.log(newPosts)

      setPosts((prevPosts) => {
        const postIdSet = new Set(prevPosts.map(post => post.postId));
        const filteredNewPosts = newPosts.filter(post => !postIdSet.has(post.postId));
        return [...prevPosts, ...filteredNewPosts];
      });
      console.log(posts)
      setHasMore(newPosts.length > 0);
    } catch (error) {
      window.alert('Error:' + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  return (
    <S.SearchContainer>
      {posts.map((post) => (

      <S.PostCard key={post.postId}>
        <S.PostContent>
          <S.Title>{post.postTitle}</S.Title>
          <S.Content>{post.postPreview}</S.Content>
          <S.UserInfo>
          <S.UserImage 
            src={post.postOwnerImageUrl} 
            alt={post.postOwnerName} 
            onError={(e: any) => { e.currentTarget.src = basicImg; }} 
            />
          <S.UserName>{post.postOwnerName}</S.UserName>
          <S.CreateAt>{post.postedDAte}</S.CreateAt>
          <S.Tag>{post.repHashTag}</S.Tag>
          </S.UserInfo>
        </S.PostContent>
        <S.PostImage src={post.postThumbnailUrl} alt={post.postTitle} />
      </S.PostCard>
      ))}
      {hasMore ? (
        <div>
        {loading && <div>로딩 중...</div>}
        <div id="observer" style={{ height: "10px" }}></div>
        </div>
      ) : (
        <div>게시물 목록을 전부 불러왔습니다.</div>
      )}
      
    </S.SearchContainer>
  );
}