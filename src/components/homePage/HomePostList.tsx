import { useState } from "react";
import * as S from "../homePage/styles/HomePostListStyle";
import bestContents from "../../data/home/bestContents.json";

// HomePostList 컴포넌트 정의
const HomePostList = () => {
  // 마우스 오버된 아이템의 ID를 추적하는 상태
  const [hoverItem, setHoveredItemId] = useState(0);
  // 현재 화면에 보이는 아이템의 수를 추적하는 상태 (초기값: 6)
  const [visibleItems, setVisibleItems] = useState(6);

  // '더 보기' 버튼이 클릭될 때 호출되는 함수로, 보이는 아이템의 수를 6개씩 증가
  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  // 가장 긴 제목을 가진 아이템의 인덱스를 찾는 함수
  const findLongestTitleIndex = (startIndex: number, endIndex: number) => {
    let maxLength = 0;
    let longestIndex = -1;
    for (let i = startIndex; i < endIndex; i++) {
      const post = bestContents[i];
      if (post.title.length > maxLength) {
        maxLength = post.title.length;
        longestIndex = i;
      }
    }
    return longestIndex;
  };

  // 컴포넌트 렌더링 부분
  return (
    <S.PostListContainer>
      <S.Title>BEST</S.Title>
      <S.ListContainer style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {/* 가시적인 아이템들만 매핑하여 렌더링 */}
        {bestContents.slice(0, visibleItems).map((post, index) => {
          // 각 행의 시작과 끝 인덱스 계산
          const rowStartIndex = Math.floor(index / 3) * 3;
          const rowEndIndex = rowStartIndex + 3;
          // 가장 긴 제목을 가진 아이템의 인덱스 찾기
          const longestTitleIndex = findLongestTitleIndex(
            rowStartIndex,
            rowEndIndex
          );
          // 가장 긴 제목을 가진 아이템이면 gridColumn을 'span 3'으로, 아니면 'span 2'로 설정
          const gridColumn = index === longestTitleIndex ? "span 2" : "span 1";
          return (
            <S.ListItemContainer key={post.id} style={{ gridColumn }}>
              <S.ListItemBox
                onMouseEnter={() => setHoveredItemId(post.id)}
                onMouseLeave={() => setHoveredItemId(0)}
                style={{
                  backgroundImage: `url(${post.thumbnail})`,
                  // 조건부 스타일: hoverItem 상태가 현재 아이템의 ID와 일치하면 필터를 적용
                  filter: hoverItem === post.id ? "brightness(0.7)" : "none",
                  transition: "filter 0.3s", // 부드러운 효과를 위해 트랜지션 추가
                }}
              >
                {/* 항상 제목을 표시하고, 마우스 오버시 내용을 추가로 표시 */}
                <S.ListItemBoxContents>
                  <div>{post.title}</div>
                  {hoverItem === post.id && <div>{post.content}</div>}
                </S.ListItemBoxContents>
              </S.ListItemBox>

              {/* 작성자 정보, 태그, 작성일 표시 */}
              <S.ItemInfoContainer>
                <S.ItemInfoLeft>
                  <S.ItemTitle>
                    <S.Writer>{post.writer}</S.Writer>
                    님의 일기
                  </S.ItemTitle>
                  <S.Date>작성일: {post.date}</S.Date>
                </S.ItemInfoLeft>
                <S.ItemInfoRight>
                  <S.Tag>#{post.tag}</S.Tag>
                </S.ItemInfoRight>
              </S.ItemInfoContainer>
              {/* 디버깅을 위한 인덱스 표시 */}
            </S.ListItemContainer>
          );
        })}
      </S.ListContainer>
      {/* 보이는 아이템의 수가 30개 이하일 경우 더 보기 버튼을 표시, 그렇지 않으면 완료 메시지 표시 */}
      {visibleItems <= 30 ? (
        <S.Botton onClick={handleShowMore}>더보기</S.Botton>
      ) : (
        <div>인기글 목록을 전부 불러왔습니다.</div>
      )}
    </S.PostListContainer>
  );
};

export default HomePostList;
