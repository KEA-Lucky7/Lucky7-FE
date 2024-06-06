import { Link } from "react-router-dom";
import * as S from "./styles/MyblogWidgetCss";
import { useStore, useUserStore } from "../homePage/login/state";
import { useEffect } from "react";
import axios from "axios";

export default function MyblogWidget() {
  // 훅을 컴포넌트 내부에서 호출합니다.
  const { accessToken, setAccessToken } = useStore();
  const { userInfo, setUserInfo } = useUserStore();

  // userInfo를 파싱합니다.
  const storedUserInfo = JSON.parse(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vision-necktitude.shop/posts/${storedUserInfo.id}/post-list?postType=ALL&hashtag=ALL&page=0`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // 객체 내용 출력
        console.log("Stored User Info:", storedUserInfo);
        console.log("Access Token:", accessToken);
        console.log("Response Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [storedUserInfo.id, accessToken]);

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
