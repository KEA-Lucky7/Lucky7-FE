import React, { useEffect, useState } from "react";
import * as S from "../homePage/styles/HomePostListStyle";
import bestContents from "../../data/home/bestContents.json";

const HomePostList = () => {

    return (
        <S.ListContainer>
            {bestContents.map(post => (
                <S.ListItem key={post.id}>
                    <div>{post.title}</div>
                    <div>{post.writer}님의 일기</div>
                    <div>#{post.tag}</div>
                    <div>작성일:{post.date}</div>
                </S.ListItem>
            ))}
        </S.ListContainer>
    );
}

export default HomePostList;
