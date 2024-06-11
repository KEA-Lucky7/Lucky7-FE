import { Link } from "react-router-dom";
import * as S from "./styles/MyblogWidgetCss";
import { useStore, useBlogIdStore, useUserStore } from "../homePage/login/state";
import { useEffect } from "react";
import axios from "axios";

export default function MyblogWidget() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const { myBlogId } = useBlogIdStore();
  const { accessToken } = useStore();
  const { userInfo } = useUserStore();

  // userInfo를 파싱합니다.
  const storedUserInfo = JSON.parse(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( `${serverUrl}/posts/${myBlogId}/post-list?postType=ALL&hashtag=ALL&page=0`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // 객체 내용 출력
        console.log("블로그 아이디 :", myBlogId);
        console.log("Access Token:", accessToken);
        console.log("Response Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [myBlogId, accessToken]);

  return (
    <S.MyblogWidgetContainer>
      <S.Profilecontainer>
        <S.Picturecontainer />
        <S.UserInfoContainer>
          <S.UserNickname>{storedUserInfo.nickname}</S.UserNickname>
          <S.UserId>{storedUserInfo.about}</S.UserId>
        </S.UserInfoContainer>
      </S.Profilecontainer>
      <S.CreateNewpostButtonContainer>
        <Link to="/write" style={{ textDecoration: "none", color: "white" }}>
          글쓰기
        </Link>
      </S.CreateNewpostButtonContainer>
    </S.MyblogWidgetContainer>
  );
}
