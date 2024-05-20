import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './styles/SearchStyle';
import SearchBlog from './SearchBlog';
import SearchPost from './SearchPost';
import SearchUser from './SearchUser';

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search: React.FC = () => {
  const navigate = useNavigate();
  const query = getQuery();
  const keyword = query.get('q');
  const tab = query.get('tab') || 'post';
  const sort = query.get('sort') || 'accuracy';

  const updateSearchParams = () => {
    let queryString = query.toString();
    queryString = queryString.replace(/\+/g, '%20');
    navigate({ search: queryString });
  };

  const handleTabChange = (newTab: string) => {
    query.set('tab', newTab);
    updateSearchParams();
  };

  const handlePeriodChange = (newPeriod: string) => {
    query.set('sort', newPeriod);
    updateSearchParams();
  };

  return (
    <S.SearchContainer>
      <S.SearchKeyword>{keyword}</S.SearchKeyword>
      <S.SearchMenuContainer>
        <S.SearchMenu
          onClick={() => handleTabChange('post')}
          selected={tab === 'post'}
        >
          글
        </S.SearchMenu>
        <S.SearchMenu
          onClick={() => handleTabChange('blog')}
          selected={tab === 'blog'}
        >
          블로그
        </S.SearchMenu>
        <S.SearchMenu
          onClick={() => handleTabChange('user')}
          selected={tab === 'user'}
        >
          별명 아이디
        </S.SearchMenu>
      </S.SearchMenuContainer>
      <S.SearchDesc>{keyword}에 대한 검색결과 입니다.</S.SearchDesc>
      <S.PeriodContainer>
        <S.PeriodMenu
          onClick={() => handlePeriodChange('accuracy')}
        >
          정확도
        </S.PeriodMenu>
        <S.PeriodMenu
          onClick={() => handlePeriodChange('latest')}
        >
          최신순
          </S.PeriodMenu>
        <S.PeriodMenu
          onClick={() => handlePeriodChange('period')}
        >
          기간전체
        </S.PeriodMenu>
      </S.PeriodContainer>
      <div>
        {tab === 'post' && <SearchPost />}
        {tab === 'blog' && <SearchBlog />}
        {tab === 'user' && <SearchUser />}
      </div>
    </S.SearchContainer>
  );
};

export default Search;