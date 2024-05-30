import React, { useEffect, useState } from 'react';
import * as S from './styles/SearchBlogStyle';

interface Blog {
  blogId: number;
  blogName: string;
  blogAbout: string;
  blogOwnerName: string;
  blogOwnerImageUrl: string;
}

export default function SearchBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://api.example.com/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data.content);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <S.Loading>Loading...</S.Loading>;
  }

  if (error) {
    return <S.Error>Error: {error}</S.Error>;
  }

  return (
    <S.SearchContainer>
      {blogs.map((blog) => (
        <S.BlogCard key={blog.blogId}>
          <S.BlogContent>
            <S.BlogTitle>{blog.blogName}</S.BlogTitle>
            <S.BlogDescription>{blog.blogAbout}</S.BlogDescription>
            <S.UserInfo>
              <S.UserImage src={blog.blogOwnerImageUrl} alt={blog.blogOwnerName} />
              <S.UserName>{blog.blogOwnerName}</S.UserName>
            </S.UserInfo>
          </S.BlogContent>
        </S.BlogCard>
      ))}
    </S.SearchContainer>
  );
}
