import { useState, useEffect } from "react";
import axios from "axios";

import * as S from "../homePage/styles/HomePostListStyle";

interface Post {
  postId: number;
  title: string;
  preview: string;
  thumbnail: string;
  mainHashtag: string;
  nickname: string;
  createdAt: string;
}

const HomePostList: React.FC = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const [hoverItem, setHoveredItemId] = useState<number>(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPosts = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get<Post[]>(`${serverUrl}/posts/home-list`, {
        params: { page, pageSize: 6 }
      });
      const newPosts = response.data;

      // 중복 체크를 통해 새로운 게시물 추가
      setPosts((prevPosts) => {
        const postIdSet = new Set(prevPosts.map(post => post.postId));
        const filteredNewPosts = newPosts.filter(post => !postIdSet.has(post.postId));
        return [...prevPosts, ...filteredNewPosts];
      });
      console.log(posts.length)

      // 새로운 게시물이 없는 경우 hasMore를 false로 설정
      setHasMore(posts.length <= 0);
      setHasMore(newPosts.length > 0);
    } catch (error) {
      window.alert("Error:" + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

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

  // 가장 긴 제목을 가진 아이템의 인덱스를 찾는 함수
  const findLongestTitleIndex = (startIndex: number, endIndex: number): number => {
    let maxLength = 0;
    let longestIndex = startIndex;
    for (let i = startIndex; i < endIndex; i++) {
      const post = posts[i];
      if (post && post.title.length > maxLength) {
        maxLength = post.title.length;
        longestIndex = i;
      }
    }
    return longestIndex;
  };

  return (
    <S.PostListContainer>
      <S.Title>BEST</S.Title>
      <S.ListContainer style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
        {posts.map((post, index) => {
          const rowStartIndex = Math.floor(index / 3) * 3;
          const rowEndIndex = rowStartIndex + 3;
          const longestTitleIndex = findLongestTitleIndex(
            rowStartIndex,
            rowEndIndex
          );
          const gridColumn = index === longestTitleIndex ? "span 3" : "span 2";
          return (
            <S.ListItemContainer key={post.postId} style={{ gridColumn }}>
              <S.ListItemBox
                onMouseEnter={() => setHoveredItemId(post.postId)}
                onMouseLeave={() => setHoveredItemId(0)}
                style={{
                  backgroundImage: `url(${post.thumbnail})`,
                }}
              >
                <S.ListItemBoxContents>
                  <div>{post.title}</div>
                  {hoverItem === post.postId && <div>{post.preview}</div>}
                </S.ListItemBoxContents>
              </S.ListItemBox>

              <S.ItemInfoContainer>
                <S.ItemInfoLeft>
                  <S.ItemTitle>
                    <S.Writer>{post.nickname}</S.Writer>
                    님의 일기
                  </S.ItemTitle>
                  <S.Date>작성일: {post.createdAt}</S.Date>
                </S.ItemInfoLeft>
                <S.ItemInfoRight>
                  <S.Tag>#{post.mainHashtag}</S.Tag>
                </S.ItemInfoRight>
              </S.ItemInfoContainer>
            </S.ListItemContainer>
          );
        })}
      </S.ListContainer>
      {hasMore ? (
        <div>
        왜안되는데말좀해봐
        </div>
      ) : (
        <div>인기글 목록을 전부 불러왔습니다.</div>
      )}
      {loading && <div>로딩 중...</div>}
        <div id="observer" style={{ height: "10px" }}></div>
    </S.PostListContainer>
  );
};

export default HomePostList;
