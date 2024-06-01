import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import LikePostList from './LikePostList';
import * as S from './styles/LikePostStyle';

export default function LikePost() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [totalPages, setTotalPages] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // const fetchTotalPages = async () => {
  //   try {
  //     const response = await axios.get(`${serverUrl}/posts/like-list`);
  //     setTotalPages(response.data.totalPages);
  //   } catch (error) {
  //     window.alert('Error:' + error);
  //   }
  // };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate('?page=' + pageNumber);
  };

  return (
    <S.Container>
      <LikePostList/>
      <S.Pagination>
        <button onClick={() => goToPage(1)} disabled={currentPage === 1}>처음</button>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>이전</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => goToPage(i + 1)} disabled={currentPage === i + 1}>
            {i + 1}
          </button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>다음</button>
        <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>마지막</button>
      </S.Pagination>
    </S.Container>
  );
}
