import React, { useEffect, useState } from "react";
import * as S from "../homePage/styles/HomePostListStyle";
import bestContents from "../../data/home/bestContents.json";

const HomePostList = () => {

    const [hoverItem, setHoveredItemId] = useState(0);
    const [visibleItems, setVisibleItems] = useState(6);

    const handleShowMore = () => {
        console.log(visibleItems);
        setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
    };

    // 각 행에서 가장 긴 제목의 길이를 찾는 함수
    const findLongestTitleLength = (startIndex, endIndex) => {
        let maxLength = 0;
        for (let i = startIndex; i < endIndex; i++) {
            const post = bestContents[i];
            if (post.title.length > maxLength) {
                maxLength = post.title.length;
            }
        }
        return maxLength;
    };

    // 가장 긴 제목의 길이를 가진 아이템의 인덱스를 찾는 함수
    const findLongestTitleIndex = (startIndex, endIndex) => {
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

    return (
        <div>
            {/* 열을 4개로 나누고 각 행에서 가장 긴 제목의 길이를 찾아 해당 아이템의 가로 길이를 2배로 설정 */}
            <S.ListContainer style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                {bestContents.slice(0, visibleItems).map((post, index) => {
                    const rowStartIndex = Math.floor(index / 3) * 3;
                    const rowEndIndex = rowStartIndex + 3;
                    const longestTitleIndex = findLongestTitleIndex(rowStartIndex, rowEndIndex);
                    return (
                        <S.ListItemContainer 
                            key={post.id}
                            // 가장 긴 제목의 아이템에 대해 가로 길이를 2배로 설정
                            style={{ gridColumn: index === longestTitleIndex ? "span 2" : "span 1" }}
                        >                    
                            <S.ListItemBox
                                onMouseEnter={() => setHoveredItemId(post.id)}
                                onMouseLeave={() => setHoveredItemId(0)}
                            >
                                <div>{post.title}</div>
                                {hoverItem === post.id && (
                                    <div>{post.content}</div>
                                )}
                            </S.ListItemBox>
                            <div>{post.writer}님의 일기</div>
                            <div>#{post.tag}</div>
                            <div>작성일:{post.date}</div>
                            <div>{index}</div>
                        </S.ListItemContainer>
                    );
                })}
            </S.ListContainer>
            {visibleItems <= 18 ? (
                <button onClick={handleShowMore}>더보기</button>
            ) : (
                <div>인기글 목록을 전부 불러왔습니다.</div>
            )}

        </div>
    );
}

export default HomePostList;
