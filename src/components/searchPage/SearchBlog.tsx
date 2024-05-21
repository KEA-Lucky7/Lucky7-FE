import * as S from "./styles/SearchBlogStyle";
import searchBlog from "../../data/search/searchBlogList.json";

export default function SearchBlog() {
  return (
    <S.SearchContainer>
      {searchBlog.map((blog, index) => (
        <S.BlogCard key={index}>
          <S.BlogContent>
            <S.BlogTitle>{blog.title}</S.BlogTitle>
            <S.BlogDescription>{blog.describe}</S.BlogDescription>
            <S.UserInfo>
              <S.UserImage src={blog.user_image} alt={blog.user} />
              <S.UserName>{blog.user}</S.UserName>
            </S.UserInfo>
          </S.BlogContent>
        </S.BlogCard>
      ))}
    </S.SearchContainer>
  );
}
