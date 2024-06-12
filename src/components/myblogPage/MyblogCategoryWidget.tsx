import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles/MyblogWidgetCss";
import { useStore } from "../homePage/login/state";
import { useParams } from "react-router-dom";
import category from "../../assets/myblog/category.png";
import up from "../../assets/myblog/up.png";
import down from "../../assets/myblog/down.png";

interface MyblogCategoryWidgetProps {
  setContents: React.Dispatch<React.SetStateAction<string>>;
}

interface Post {
  id: number;
  content: string;
  category: string;
  tag: string;
  title: string;
  date: string;
  views: number;
  mainHashtag: string;
  postType: string;
  createdAt: number;
  commentCnt: number;
  likeCnt: number;
  preview: string;
  thumbnail: string;
  postId: number;
  postCnt: number;
}

interface BlogData {
  postCnt: number;
  postList: Post[];
}

const MyblogPostCategory: React.FC<MyblogCategoryWidgetProps> = ({
  setContents,
}) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const { accessToken } = useStore();
  const { blogId } = useParams<{ blogId: string }>();
  const [accountbookCategoryOpen, setAccountbookCategoryOpen] = useState(false);
  const [freetextCategoryOpen, setFreetextCategoryOpen] = useState(false);
  const [freeList, setFreeList] = useState<string[]>([]);
  const [walletList, setWalletList] = useState<string[]>([]);
  const [blogData, setBlogData] = useState<BlogData>({
    postCnt: 0,
    postList: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/posts/${blogId}/hashtag-list`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const { freeList, walletList } = response.data;
        setFreeList(freeList);
        setWalletList(walletList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [serverUrl, blogId, accessToken]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/posts/${blogId}/post-list?postType=ALL&hashtag=ALL&page=0`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setBlogData(response.data || { postCnt: 0, postList: [] });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [serverUrl, blogId, accessToken]);

  const handleCategoryClick = (
    setCategoryOpen: React.Dispatch<React.SetStateAction<boolean>>,
    contentName: string
  ) => {
    setCategoryOpen((prev) => !prev);
    setContents(contentName);
  };

  const renderDropdownItems = (items: string[]) => (
    <S.Dropdown>
      {items.map((item, index) => (
        <S.DropdownItem key={index}>{`ㄴ ${item}`}</S.DropdownItem>
      ))}
    </S.Dropdown>
  );

  return (
    <S.MyblogCategoryWidgetContainer>
      <img
        src={category}
        alt="category"
        style={{ marginLeft: "-5px", transform: "scale(0.75)" }}
      />
      <div>
        <S.ContentTitle>
          <S.Circle />
          전체({blogData.postCnt})
        </S.ContentTitle>
        <S.Section>
          <S.ListItemButton
            onClick={() =>
              handleCategoryClick(setFreetextCategoryOpen, "postList")
            }
          >
            <S.ListItemText>자유글</S.ListItemText>

            {freetextCategoryOpen ? (
              <img
                src={up}
                style={{
                  height: "30px",
                  width: "50px",
                  scale: "25%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={down}
                style={{
                  height: "30px",
                  width: "50px",
                  scale: "25%",
                  objectFit: "cover",
                }}
              />
            )}
          </S.ListItemButton>
          {freetextCategoryOpen && renderDropdownItems(freeList)}
        </S.Section>

        <S.Section>
          <S.ListItemButton
            onClick={() =>
              handleCategoryClick(setAccountbookCategoryOpen, "accountBook")
            }
          >
            <S.ListItemText>소비일기</S.ListItemText>
            {accountbookCategoryOpen ? (
              <img
                src={up}
                style={{
                  height: "30px",
                  width: "50px",
                  scale: "25%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={down}
                style={{
                  height: "30px",
                  width: "50px",
                  scale: "25%",
                  objectFit: "cover",
                }}
              />
            )}
          </S.ListItemButton>
          {accountbookCategoryOpen && renderDropdownItems(walletList)}
        </S.Section>

        <S.Section>
          <S.ListItemButton
          // onClick={() => handleCategoryClick(setReportCategoryOpen, "report")}
          >
            <S.ListItemText>레포트</S.ListItemText>
          </S.ListItemButton>
        </S.Section>
      </div>
    </S.MyblogCategoryWidgetContainer>
  );
};

export default MyblogPostCategory;
