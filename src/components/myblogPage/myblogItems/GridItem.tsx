import React, { useEffect, useState } from 'react';
import * as S from '../styles/MyblogPostCss';

interface Post {
  id: number;
  category: string;
  thumbnail: string;
  title: string;
  writer: string;
  creationDate: string;
  likes: number;
}

const GridItem: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5173/data/userBlogData/myBlogData.json'); // Update path to your JSON file
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <S.GridItem key={post.id}>
          <S.Picturecontainer>
            <img src={post.thumbnail} alt="Thumbnail" width={'160px'} height={'120px'}/>
          </S.Picturecontainer>
          <S.FixandDelete>수정/삭제</S.FixandDelete>
          <S.PostName>{post.title}</S.PostName>
          <S.PostWriter>{post.writer}</S.PostWriter>
          <S.PostDate>
            <div>{post.creationDate}</div>
            <div>공감수: {post.likes}</div>
          </S.PostDate>
        </S.GridItem>
      ))}
    </>
  );
};

export default GridItem;
