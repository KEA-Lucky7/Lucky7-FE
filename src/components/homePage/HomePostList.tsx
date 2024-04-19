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

    return (
        <div>
            <S.ListContainer style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
                {bestContents.slice(0, visibleItems).map((post, index) => {
                    const rowStartIndex = Math.floor(index / 3) * 3;
                    const rowEndIndex = rowStartIndex + 3;
                    const longestTitleIndex = findLongestTitleIndex(rowStartIndex, rowEndIndex);
                    const gridColumn = index === longestTitleIndex ? "span 3" : "span 2";
                    return (
                        <S.ListItemContainer 
                            key={post.id}
                            style={{ gridColumn }}
                        >                    
                            <S.ListItemBox
                                onMouseEnter={() => setHoveredItemId(post.id)}
                                onMouseLeave={() => setHoveredItemId(0)}
                                style={{ backgroundImage: hoverItem === post.id ? `url(${post.thumbnail})` : 'none' }}
                            >
                                <S.ListItemBoxContents>
                                    <div>{post.title}</div>
                                    {hoverItem === post.id && (
                                        <div>{post.content}</div>
                                    )}
                                </S.ListItemBoxContents>
                            </S.ListItemBox>
                            <div>{post.writer}님의 일기</div>
                            <div>#{post.tag}</div>
                            <div>작성일:{post.date}</div>
                            <div>{index}</div>
                        </S.ListItemContainer>
                    );
                })}
            </S.ListContainer>
            {visibleItems <= 30 ? (
                <button onClick={handleShowMore}>더보기</button>
            ) : (
                <div>인기글 목록을 전부 불러왔습니다.</div>
            )}

        </div>
    );
}

export default HomePostList;
