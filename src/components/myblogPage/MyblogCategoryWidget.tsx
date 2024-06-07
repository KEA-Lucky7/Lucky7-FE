import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import axios from 'axios';

import * as S from "./styles/MyblogWidgetCss";
import { useStore, useUserStore } from "../homePage/login/state";
import { Dispatch } from "react";

interface MyblogCategoryWidgetProps {
  setContents: Dispatch<React.SetStateAction<string>>;
  // ... 기타 props
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

export default function MyblogPostCategory({
  setContents,
}: MyblogCategoryWidgetProps) {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const { accessToken } = useStore();
  const [reportCategory, setReportCategory] = React.useState(true);
  const [accountbookCategory, setAccountbookCategory] = React.useState(true); //가계부 카테고리
  const [freetextCategory, setFreetextCategory] = React.useState(true); //자유글 카테고리
  const [freeList, setFreeList] = React.useState<string[]>([]);
  const [walletList, setWalletList] = React.useState<string[]>([]);
  const [blogData, setBlogData] = useState<BlogData>({ postCnt: 0, postList: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/posts/3/hashtag-list`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        const { freeList, walletList } = response.data;
        setFreeList(freeList);
        setWalletList(walletList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/posts/3/post-list?postType=ALL&hashtag=ALL&page=0`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        setBlogData(response.data || { postCnt: 0, postList: [] });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const reportCategoryClick = () => {
    setReportCategory(!reportCategory);
  };

  //가계부 카테고리 눌렀을때 나오는 함수
  const accountbookCategoryClick = () => {
    setAccountbookCategory(!accountbookCategory);
  };

  //자유글 카테고리 눌렀을때 나오는 함수
  const freetextCategoryClick = () => {
    setFreetextCategory(!freetextCategory);
  };

  const setContentsPostList = () => {
    setContents("postList");
  };
  const setContentsAccountBook = () => {
    setContents("accountBook");
  };
  const setContentsReport = () => {
    setContents("report");
  };

  return (
    <S.MyblogCategoryWidgetContainer>
      <S.Title>Category</S.Title>
      <S.ContentTitle>
        <S.Circle />
        전체({blogData.postCnt})
      </S.ContentTitle>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {/* 첫 번째 메뉴 */}
        <S.Section onClick={setContentsPostList}>
          <ListItemButton onClick={freetextCategoryClick}>
            <ListItemIcon></ListItemIcon>
            <S.SubCircle />
            <ListItemText primary="자유글" />
            {freetextCategory ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* 눌렀을 때 나오는 하위 메뉴 */}
          <Collapse in={freetextCategory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon></ListItemIcon>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {freeList.map((item, index) => (
                    <ListItemText key={index} primary={`ㄴ #${item}`} />
                  ))}
                </div>
              </ListItemButton>
            </List>
          </Collapse>
        </S.Section>

        {/* 두 번째 메뉴 */}
        <S.Section onClick={setContentsAccountBook}>
          <ListItemButton onClick={accountbookCategoryClick}>
            <ListItemIcon></ListItemIcon>
            <S.SubCircle />
            <ListItemText primary="소비일기" />
            {accountbookCategory ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* 눌렀을 때 나오는 하위 메뉴 */}
          <Collapse in={accountbookCategory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon></ListItemIcon>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {walletList.map((item, index) => (
                    <ListItemText key={index} primary={`ㄴ #${item}`} />
                  ))}
                </div>
              </ListItemButton>
            </List>
          </Collapse>
        </S.Section>

        {/* 세 번째 메뉴 */}
        <S.Section onClick={setContentsReport}>
          <ListItemButton onClick={reportCategoryClick}>
            <ListItemIcon></ListItemIcon>
            <S.SubCircle />
            <ListItemText primary="레포트" />
            {reportCategory ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* 눌렀을 때 나오는 하위 메뉴 */}
          <Collapse in={reportCategory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon></ListItemIcon>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <ListItemText primary="ㄴ #레포트태그1" />
                  <ListItemText primary="ㄴ #레포트태그2" />
                  <ListItemText primary="ㄴ #레포트태그3" />
                </div>
              </ListItemButton>
            </List>
          </Collapse>
        </S.Section>
      </List>
    </S.MyblogCategoryWidgetContainer>
  );
}
