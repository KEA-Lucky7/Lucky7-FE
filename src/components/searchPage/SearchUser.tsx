import { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

import basicImg from '../../../src/assets/profile/profile.png';
import * as S from './styles/SearchUserStyle';

interface User {
  memberId: number,
  blogId: number,
  memberNickname: string,
  memberAbout: string,
  memberImageUrl: string
}

interface UserResponse {
  content: User[];
}

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchUser() {
  const query = getQuery();
  const keyword = query.get('q');
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  
  const [users, setUsers] = useState<User[]>([]);
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
      const response = await axios.get<UserResponse>(`${serverUrl}/search/member`, {
        params: { value: keyword, page, size: 6 }
      });
      const newUsers = response.data.content;
      console.log(newUsers)

      setUsers((prevUsers) => {
        const userIdSet = new Set(prevUsers.map(user => user.memberId));
        const filteredNewUsers = newUsers.filter(user => !userIdSet.has(user.memberId));
        return [...prevUsers, ...filteredNewUsers];
      });
      console.log(users)
      setHasMore(newUsers.length > 0);
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
      {users.map((user) => (
        <S.UserCard key={user.memberId}>
          <S.UserImage 
            src={user.memberImageUrl} 
            alt={user.memberNickname} 
            onError={(e: any) => { e.currentTarget.src = basicImg; }} 
            />       <S.UserContent>
          <S.UserName>{user.memberNickname}</S.UserName>
          <S.UserDescription>{user.memberAbout}</S.UserDescription>
        </S.UserContent>
      </S.UserCard>
      ))}
      {hasMore ? (
        <div>
        {loading && <div>로딩 중...</div>}
        <div id="observer" style={{ height: "10px" }}></div>
        </div>
      ) : (
        <div>사용자 목록을 전부 불러왔습니다.</div>
      )}
      
    </S.SearchContainer>
  );
}