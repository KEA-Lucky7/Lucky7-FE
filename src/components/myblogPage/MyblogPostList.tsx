import React, { useState } from 'react';
import * as S from "./styles/MyblogPostCss";
import articleList from "../../assets/myblog/articleList.png";
import pictureList from "../../assets/myblog/pictureList.png";
import blogPosts from "../../data/userBlog/articleListData.json";

interface Post {
    id: number;
    category: string;
    tag: string;
    title: string;
    date: string;
    views: number;
}

const MyblogPostList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const postsPerPage: number = 15; // Number of posts per page

    // Calculate index of the first and last post on the current page
    const indexOfLastPost: number = currentPage * postsPerPage;
    const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
    const currentPosts: Post[] = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

    return (
        <S.MyblogPostContainer>
            {/* 제목 */}
            <S.Title>전체글보기</S.Title>
            <S.SubTitleContainer>
                <S.SubTitle>{blogPosts.length}개의 글</S.SubTitle>
                {/* 사진포함 글리스트, 그냥 글리스트 아이콘 */}
                <S.IconBox>
                    <img src={articleList} alt='글리스트' />
                    <img src={pictureList} alt='사진리스트' />
                    <S.DropDownMenu>
                    </S.DropDownMenu>
                </S.IconBox>
            </S.SubTitleContainer>
            {/* 글 리스트 */}
            <S.PostListContainer>
                <S.FieldBox>
                    <S.TitleField>제목</S.TitleField>
                    <S.DateField>작성일</S.DateField>
                    <S.CheckField>조회</S.CheckField>
                </S.FieldBox>
                {currentPosts.map((post) => (
                    <S.ListBox key={post.id}>
                        <S.ListCategory>{post.category}</S.ListCategory>
                        <S.ListTag>#{post.tag}</S.ListTag>
                        <S.ListTitle>{post.title}</S.ListTitle>
                        <S.DateField>{post.date}</S.DateField>
                        <S.CheckField>{post.views}</S.CheckField>
                    </S.ListBox>
                ))}
                {/* Pagination links */}
                <S.PaginationBox>
                    {[...Array(Math.ceil(blogPosts.length / postsPerPage)).keys()].map((pageNumber) => (
                        <S.PageNumber key={pageNumber} onClick={() => paginate(pageNumber + 1)}>
                            {pageNumber + 1}
                        </S.PageNumber>
                    ))}
                </S.PaginationBox>
            </S.PostListContainer>
        </S.MyblogPostContainer>
    );
};

export default MyblogPostList;
