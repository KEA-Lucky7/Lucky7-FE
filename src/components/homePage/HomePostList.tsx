import React, { useEffect, useState } from "react";
import * as S from "../homePage/styles/HomePostListStyle";
import bestContents from "../../data/home/bestContents.json";

const HomePostList = () => {

    const [hoverItem, setHoveredItemId] = useState(0);
    const [visibleItems, setVisibleItems] = useState(6); // 처음에는 6개의 아이템만 보이도록 설정

    const handleShowMore = () => {
        // 더보기 버튼을 클릭할 때마다 현재 보여지는 아이템의 개수를 추가로 6개씩 증가시킴
        setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
    };

    return (
        <S.ListContainer>
            {bestContents.slice(0, visibleItems).map(post => (
                <S.ListItemContainer key={post.id}>
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
                </S.ListItemContainer>
            ))}
            {bestContents.length > visibleItems && (
                <button onClick={handleShowMore}>더보기</button>
            )}
        </S.ListContainer>
    );
}

export default HomePostList;