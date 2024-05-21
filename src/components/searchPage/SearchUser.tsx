import * as S from "./styles/SearchUserStyle";
import searchUser from "../../data/search/searchUserList.json";

export default function SearchUser () {

  return (
    <S.SearchContainer>
      {searchUser.map((user, index) => (
        <S.UserCard key={index}>
          <S.UserImage src={user.user_image} alt={user.user} />
          <S.UserContent>
            <S.UserName>{user.user}</S.UserName>
            <S.UserDescription>{user.introduce}</S.UserDescription>
          </S.UserContent>
        </S.UserCard>
      ))}
    </S.SearchContainer>
  );
}
