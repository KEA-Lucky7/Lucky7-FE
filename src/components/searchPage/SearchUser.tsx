import { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

import basicImg from '../../../src/assets/profile/profile.png';
import * as S from './styles/SearchBlogStyle';

interface Blog {
  blogId: number;
  blogName: string;
  blogAbout: string;
  blogOwnerName: string;
  blogOwnerImageUrl: string;
}

interface BlogResponse {
  content: Blog[];
}

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchUser() {
  const query = getQuery();
  const keyword = query.get('q');
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  
  const [blogs, setBlogs] = useState<Blog[]>([]);
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
      const response = await axios.get<BlogResponse>(`${serverUrl}/search/blog`, {
        params: { value: keyword, page, size: 6 }
      });
      const newBlogs = response.data.content;

      setBlogs((prevBlogs) => {
        const postIdSet = new Set(prevBlogs.map(blog => blog.blogId));
        const filteredNewBlogs = newBlogs.filter(blog => !postIdSet.has(blog.blogId));
        return [...prevBlogs, ...filteredNewBlogs];
      });
      console.log(blogs)
      setHasMore(newBlogs.length > 0);
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
      {blogs.map((blog) => (
        <S.BlogCard key={blog.blogId}>
          <S.BlogContent>
            <S.BlogTitle>{blog.blogName}</S.BlogTitle>
            <S.BlogDescription>{blog.blogAbout}</S.BlogDescription>
            <S.UserInfo>
              <S.UserImage 
                src={blog.blogOwnerImageUrl} 
                alt={blog.blogOwnerName} 
                onError={(e: any) => { e.currentTarget.src = basicImg; }} 
              />
              <S.UserName>{blog.blogOwnerName}</S.UserName>
            </S.UserInfo>
          </S.BlogContent>
        </S.BlogCard>
      ))}
      {hasMore ? (
        <div>
        {loading && <div>로딩 중...</div>}
        <div id="observer" style={{ height: "10px" }}></div>
        </div>
      ) : (
        <div>인기글 목록을 전부 불러왔습니다.</div>
      )}
      
    </S.SearchContainer>
  );
}