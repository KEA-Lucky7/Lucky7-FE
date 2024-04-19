import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import * as S from "./styles/MyblogWidgetCss";

export default function MyblogPostCategory() {
    const [reportCategory, setReportCategory] = React.useState(true);
    const [accountbookCategory, setAccountbookCategory] = React.useState(true); //가계부 카테고리
    const [freetextCategory, setFreetextCategory] = React.useState(true); //자유글 카테고리

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

    return (
        <S.MyblogCategoryWidgetContainer>
            <S.Title>Category</S.Title>
            <S.ContentTitle>
                <S.Circle />
                전체(89)
            </S.ContentTitle>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {/* 첫 번째 메뉴 */}
                <ListItemButton onClick={freetextCategoryClick}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <S.SubCircle />
                    <ListItemText primary="자유글"/>
                    {freetextCategory ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* 눌렀을 때 나오는 하위 메뉴 */}
                <Collapse in={freetextCategory} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>

                                    <ListItemText primary="ㄴ #자유글태그1" />
                                </div>
                                <ListItemText primary="ㄴ #자유글태그2" />
                                <ListItemText primary="ㄴ #자유글태그3" />
                            </div>
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* 두 번째 메뉴 */}
                <ListItemButton onClick={accountbookCategoryClick}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <S.SubCircle />
                    <ListItemText primary="가계부" />
                    {accountbookCategory ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* 눌렀을 때 나오는 하위 메뉴 */}
                <Collapse in={accountbookCategory} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <ListItemText primary="ㄴ #가계부태그1" />
                                <ListItemText primary="ㄴ #가계부태그2" />
                                <ListItemText primary="ㄴ #가계부태그3" />
                            </div>
                        </ListItemButton>
                    </List>
                </Collapse>


                {/* 세 번째 메뉴 */}
                <ListItemButton onClick={reportCategoryClick}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <S.SubCircle />
                    <ListItemText primary="레포트" />
                    {reportCategory ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* 눌렀을 때 나오는 하위 메뉴 */}
                <Collapse in={reportCategory} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <ListItemText primary="ㄴ #레포트태그1" />
                                <ListItemText primary="ㄴ #레포트태그2" />
                                <ListItemText primary="ㄴ #레포트태그3" />
                            </div>
                        </ListItemButton>
                    </List>
                </Collapse>

            </List >
        </S.MyblogCategoryWidgetContainer >
    );
}
