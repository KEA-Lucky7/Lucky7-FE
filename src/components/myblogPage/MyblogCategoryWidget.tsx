import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import * as S from "./styles/MyblogWidgetCss";

export default function MyblogPostCategory() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <S.MyblogCategoryWidgetContainer>
            <S.Title>Category</S.Title>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        전체(89)
                    </ListSubheader>
                }
            >
                {/* 첫 번째 메뉴 */}
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>

                {/* 두 번째 메뉴 */}
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>

                {/* 세 번째 메뉴 */}
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* 눌렀을 때 나오는 하위 메뉴 */}
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>

            </List>
        </S.MyblogCategoryWidgetContainer>
    );
}
