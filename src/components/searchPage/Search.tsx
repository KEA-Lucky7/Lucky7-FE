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
  const query = getQuery();
  const keyword = query.get('q');
  const tab = query.get('tab') || 'post';

  const [sort, setSort] = useState(query.get('sort') || 'likeDESC');
  const [periodMenuOpen, setPeriodMenuOpen] = useState(false);
  const [period, setPeriod] = useState(query.get('period') || 'all');
  const [startPeriod, setStartPeriod] = useState('');
  const [endPeriod, setEndPeriod] = useState('');

  useEffect(() => {
    if (tab === 'blog' || tab === 'user') {
      query.delete('sort');
      query.delete('startDate');
      query.delete('endDate');
    } else if (!query.get('sort')) {
      query.set('sort', sort)
      setPeriodQuery()
    }
    updateSearchParams();
  }, [tab, sort]);

  useEffect(() => {
    if (tab === 'blog' || tab === 'user') {
      query.delete('period');
    } else if (!query.get('period')) {
      query.set('period', period);
    }
    updateSearchParams();
  }, [tab]);

  useEffect(() => {
    setPeriodQuery();
  }, [period, startPeriod, endPeriod]);

  const setPeriodQuery = () => {
    if (period === 'all') {
      query.set('period', 'all');
      query.delete('startDate');
      query.delete('endDate');
    } else {
      query.set('startDate', startPeriod);
      query.set('endDate', endPeriod);
      query.delete('period');
    }
    updateSearchParams();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePeriodChange('userSet');
    }
  };

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

    if (newPeriod === 'all') {
      setStartPeriod('1900-01-01');
      setEndPeriod(getTodayDate());
    } else if (newPeriod === 'week') {
      setStartPeriod(getPreviousWeek());
      setEndPeriod(getTodayDate());
    } else if (newPeriod === 'month') {
      setStartPeriod(getPreviousMonth());
      setEndPeriod(getTodayDate());
    } else if (newPeriod === 'userSet') {
      // 
    }

    if (isValidDate(startPeriod) && isValidDate(endPeriod)) {
      setPeriodQuery();
    } else {
      window.alert("올바른 입력이 아닙니다. 날짜의 형식을 YYYY-MM-DD로 입력해 주세요.");
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getPreviousWeek = () => {
    const today = new Date();
    const prevWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const year = prevWeek.getFullYear();
    const month = String(prevWeek.getMonth() + 1).padStart(2, '0');
    const day = String(prevWeek.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getPreviousMonth = () => {
    const today = new Date();
    const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    const year = prevMonth.getFullYear();
    const month = String(prevMonth.getMonth() + 1).padStart(2, '0');
    const day = String(prevMonth.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  function isValidDate(dateString: string) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
      return false;
    }

    const [year, month, day] = dateString.split('-').map(Number);

    if (month < 1 || month > 12) {
      return false;
    }

    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      if (isLeapYear) {
        monthLengths[1] = 29;
      }
    }

    if (day < 1 || day > monthLengths[month - 1]) {
      return false;
    }

    return true;
  }

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
              onClick={() => handleSortChange('likeDESC')}
              selected={sort === 'likeDESC'}
            >
              정확도
            </S.SortMenu>
            <S.SortMenu
              onClick={() => handleSortChange('latestASC')}
              selected={sort === 'latestASC'}
            >
              최신순
            </S.SortMenu>
            {tab === 'post' && (
              <>
                <S.SortMenu onClick={togglePeriodMenu} selected={periodMenuOpen}>
                  { period === 'all' && <div> 기간 전체 </div>}
                  { period === 'week' && <div> 최근 1주일 </div>}
                  { period === 'month' && <div> 최근 1달 </div>}
                  { period === 'userSet' && <div> 직접 입력 </div>}
                </S.SortMenu>
                {periodMenuOpen && (
                  <S.PeriodContainer>
                    <S.PeriodOption onClick={() => handlePeriodChange('all')}>
                      기간 전체
                    </S.PeriodOption>
                    <S.PeriodOption onClick={() => handlePeriodChange('week')}>
                      최근 1주일
                    </S.PeriodOption>
                    <S.PeriodOption onClick={() => handlePeriodChange('month')}>
                      최근 1달
                    </S.PeriodOption>
                    <S.PeriodOption onClick={() => handlePeriodChange('userSet')}>
                      직접 입력
                    </S.PeriodOption>
                    <S.PeriodInput
                      placeholder="2000-01-01"
                      value={startPeriod}
                      onKeyDown={handleKeyDown}
                      onChange={(e) => setStartPeriod(e.target.value)}
                    />
                    <S.PeriodInput
                      placeholder="2000-01-01"
                      value={endPeriod}
                      onKeyDown={handleKeyDown}
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
