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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlePeriodChange("직접 입력")
    }
  }

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
    if(isValidDate(startPeriod) && isValidDate(endPeriod) ){

    } else{
      window.alert("올바른 입력이 아닙니다. 날짜의 형식을 YYYY-MM-DD로 입력해 주세요.")
    }
    window.alert(startPeriod + endPeriod)
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  function isValidDate(dateString: string) {
    // 정규식을 사용하여 형식이 YYYY-MM-DD인지 확인합니다.
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
      return false;
    }
  
    // 날짜 부분을 추출합니다.
    const [year, month, day] = dateString.split('-').map(Number);
  
    // 월이 1-12 범위에 있는지 확인합니다.
    if (month < 1 || month > 12) {
      return false;
    }
  
    // 날짜가 해당 월에 유효한지 확인합니다.
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // 윤년 체크
    if (month === 2) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      if (isLeapYear) {
        monthLengths[1] = 29;
      }
    }
  
    // 날짜가 해당 월의 범위에 있는지 확인합니다.
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
