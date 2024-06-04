import React, { useState, useEffect } from 'react';
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
  const location = useLocation();
  const query = getQuery();
  const keyword = query.get('q');
  const tab = query.get('tab') || 'post';

  const [sort, setSort] = useState(query.get('sort') || 'accuracy');
  const [periodMenuOpen, setPeriodMenuOpen] = useState(false);
  const [period, setPeriod] = useState('기간 전체');
  const [startPeriod, setStartPeriod] = useState('');
  const [endPeriod, setEndPeriod] = useState('');

  useEffect(() => {
    if (tab === 'user') {
      query.delete('sort');
    } else if (!query.get('sort')) {
      query.set('sort', sort);
    }
    updateSearchParams();
  }, [tab, sort]);

  useEffect(() => {
    setStartPeriod("1900-01-01")
    setEndPeriod(getTodayDate);
  });

  const updateSearchParams = () => {
    let queryString = query.toString();
    queryString = queryString.replace(/\+/g, '%20');
    navigate({ search: queryString });
  };

  const handleTabChange = (newTab: string) => {
    query.set('tab', newTab);
    updateSearchParams();
  };

  const handleSortChange = (newSort: string) => {
    setSort(newSort);
    query.set('sort', newSort);
    updateSearchParams();
  };

  const handlePeriodChange = (newPeriod: string) => {
    setPeriod(newPeriod);
    setPeriodMenuOpen(false);

    if (newPeriod == "기간 전체") {
      setStartPeriod("1900-01-01")
      setEndPeriod(getTodayDate);
    } else if (newPeriod == "최근 1주일") {
      setStartPeriod("1900-01-01")
      setEndPeriod(getTodayDate);
    } else if (newPeriod == "최근 1달") {
      setStartPeriod("1900-01-01")
      setEndPeriod(getTodayDate);
    } else if (newPeriod == "직접 입력") {

    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const togglePeriodMenu = () => {
    setPeriodMenuOpen(!periodMenuOpen);
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
      <S.FlexContainer>
        <S.SearchDesc>{keyword}에 대한 검색결과 입니다.</S.SearchDesc>
        {tab !== 'user' && (
          <S.SortContainer>
            <S.SortMenu
              onClick={() => handleSortChange('accuracy')}
              selected={sort === 'accuracy'}
            >
              정확도
            </S.SortMenu>
            <S.SortMenu
              onClick={() => handleSortChange('latest')}
              selected={sort === 'latest'}
            >
              최신순
            </S.SortMenu>
            {tab === 'post' && (
              <>
                <S.SortMenu onClick={togglePeriodMenu} selected={periodMenuOpen}>
                  {period}
                </S.SortMenu>
                {periodMenuOpen && (
                  <S.PeriodContainer>
                    <S.PeriodOption onClick={() => handlePeriodChange('기간 전체')}>
                      기간 전체
                    </S.PeriodOption>
                    <S.PeriodOption onClick={() => handlePeriodChange('최근 1주일')}>
                      최근 1주일
                    </S.PeriodOption>
                    <S.PeriodOption onClick={() => handlePeriodChange('최근 1달')}>
                      최근 1달
                    </S.PeriodOption>
                    <S.PeriodOption onClick={() => handlePeriodChange('직접 입력')}>
                      직접 입력
                    </S.PeriodOption>
                    <S.PeriodInput
                      placeholder="닉네임"
                      value={startPeriod}
                      onChange={(e) => setStartPeriod(e.target.value)}
                      />
                      {""}
                    <S.PeriodInput
                      placeholder="닉네임"
                      value={endPeriod}
                      onChange={(e) => setEndPeriod(e.target.value)}
                      />
                  </S.PeriodContainer>
                )}
              </>
            )}
          </S.SortContainer>
        )}
      </S.FlexContainer>
      <div>
        {tab === 'post' && <SearchPost />}
        {tab === 'blog' && <SearchBlog />}
        {tab === 'user' && <SearchUser />}
      </div>
    </S.SearchContainer>
  );
};

export default Search;
