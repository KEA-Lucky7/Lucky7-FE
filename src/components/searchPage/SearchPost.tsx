import postList from "../../data/search/searchPostList.json";

import * as S from "./styles/SearchPostStyle";

export default function SearchPost() {
  return (
    <S.SearchContainer>
      {postList.map((post, index) => (
        <S.PostCard key={index}>
        <S.PostContent>
          <S.Title>{post.title}</S.Title>
          <S.Content>{post.content}</S.Content>
          <S.UserInfo>
            <S.UserImage src={post.user_image} alt={post.user_name} />
            <S.UserName>{post.user_name}</S.UserName>
            <S.CreateAt>{post.create_at}</S.CreateAt>
            <S.Tag>{post.tag}</S.Tag>
          </S.UserInfo>
        </S.PostContent>
        <S.PostImage src={post.postImage} alt={post.title} />
      </S.PostCard>
    ))}
  </S.SearchContainer>
  );
}
