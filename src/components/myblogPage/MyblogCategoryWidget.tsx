import { useState, useEffect } from "react";
import axios from "axios";
import category from "../../assets/myblog/category.png";
import up from "../../assets/myblog/up.png";
import down from "../../assets/myblog/down.png";
import * as S from "./styles/MyblogWidgetCss";

interface MyblogCategoryWidgetProps {
  setContents: React.Dispatch<React.SetStateAction<string>>;
}

const MyblogPostCategory: React.FC<MyblogCategoryWidgetProps> = ({
  setContents,
}) => {
  // const [reportCategoryOpen, setReportCategoryOpen] = useState(false); //보고서 한 페이지로 통합으로 인해 사용안함
  const [accountbookCategoryOpen, setAccountbookCategoryOpen] = useState(false);
  const [freetextCategoryOpen, setFreetextCategoryOpen] = useState(false);
  const [freeList, setFreeList] = useState<string[]>([]);
  const [walletList, setWalletList] = useState<string[]>([]);
  const [blogData, setBlogData] = useState<{
    postCnt: number;
    postList: any[];
  }>({ postCnt: 0, postList: [] });

  useEffect(() => {
    const fetchHashtagList = async () => {
      try {
        const response = await axios.get(
          "https://vision-necktitude.shop/posts/3/hashtag-list",
          {
            headers: {
              Authorization:
                "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJpZCI6IjE1Iiwic3ViIjoiQWNjZXNzVG9rZW4iLCJpYXQiOjE3MTc1NjQ4OTYsImV4cCI6MTcxNzU3MjA5Nn0.wpCsUMFH--FRZDvfwSIfoD0SExvrJAOhWUd7FRFm2IU",
            },
          }
        );
        const { freeList, walletList } = response.data;
        setFreeList(freeList || []);
        setWalletList(walletList || []);
      } catch (error) {
        console.error("Error fetching hashtag list:", error);
      }
    };

    fetchHashtagList();
  }, []);

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await axios.get(
          "https://vision-necktitude.shop/posts/3/post-list?postType=ALL&hashtag=ALL&page=0",
          {
            headers: {
              Authorization:
                "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJpZCI6IjE1Iiwic3ViIjoiQWNjZXNzVG9rZW4iLCJpYXQiOjE3MTc1NjQ4OTYsImV4cCI6MTcxNzU3MjA5Nn0.wpCsUMFH--FRZDvfwSIfoD0SExvrJAOhWUd7FRFm2IU",
            },
          }
        );
        setBlogData(response.data || { postCnt: 0, postList: [] });
      } catch (error) {
        console.error("Error fetching post list:", error);
      }
    };

    fetchPostList();
  }, []);

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
