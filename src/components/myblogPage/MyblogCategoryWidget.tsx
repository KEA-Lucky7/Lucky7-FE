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
  const [reportCategoryOpen, setReportCategoryOpen] = useState(false);
  const [accountbookCategoryOpen, setAccountbookCategoryOpen] = useState(false);
  const [freetextCategoryOpen, setFreetextCategoryOpen] = useState(false);
  const [freeList, setFreeList] = useState<string[]>([]);
  const [walletList, setWalletList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vision-necktitude.shop/posts/1/hashtag-list"
        );
        const { freeList, walletList } = response.data;
        setFreeList(freeList);
        setWalletList(walletList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
      {/* <S.ContentTitle>전체(89)</S.ContentTitle> */}
      <div>
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
            onClick={() => handleCategoryClick(setReportCategoryOpen, "report")}
          >
            <S.ListItemText>레포트</S.ListItemText>
          </S.ListItemButton>
        </S.Section>
      </div>
    </S.MyblogCategoryWidgetContainer>
  );
};

export default MyblogPostCategory;
