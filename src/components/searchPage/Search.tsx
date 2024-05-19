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

  const handleTabChange = (newTab: string) => {
    if (newTab === 'post') {
      query.delete('tab');
    } else {
      query.set('tab', newTab);
    }
    navigate({ search: query.toString() });
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
      <div>
        {tab === 'post' && <SearchPost />}
        {tab === 'blog' && <SearchBlog />}
        {tab === 'user' && <SearchUser />}
      </div>
    </S.SearchContainer>
  );
};

export default Search;