import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles/SearchStyle';
import SearchBlog from './SearchBlog';
import SearchPost from './SearchPost';
import SearchUser from './SearchUser';

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = getQuery();
  const keyword = query.get('q');
  const tab = query.get('tab') || 'post';

  const handleTabChange = (newTab: string) => {
    query.set('tab', newTab);
    navigate({ search: query.toString() });
  };

  return (
    <S.SearchContainer>
      <div>{keyword}</div>
      <nav>
        <button onClick={() => handleTabChange('post')}>Post</button>
        <button onClick={() => handleTabChange('blog')}>Blog</button>
        <button onClick={() => handleTabChange('user')}>User</button>
      </nav>
      <div>
        {tab === 'post' && <SearchPost />}
        {tab === 'blog' && <SearchBlog />}
        {tab === 'user' && <SearchUser />}
      </div>
    </S.SearchContainer>
  );
};

export default Search;
