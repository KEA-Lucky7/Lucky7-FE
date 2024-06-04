import * as React from 'react';
import * as S from "../styles/CreatepostCss";
import { ListItemText } from '@mui/material';
import { ListSubheader } from '@mui/material';
import Button from '@mui/material/Button';

interface TemporarySaveModalProps {
    closeModal: () => void;
}

export const TemporarySaveModal: React.FC<TemporarySaveModalProps> = ({ closeModal }) => {
    const [posts, setPosts] = React.useState<any[]>([]);
    const isMountedRef = React.useRef<boolean>(true);

    React.useEffect(() => {
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    React.useEffect(() => {
        const fetchTemporaryPosts = async () => {
            try {
                const response = await fetch('https://vision-necktitude.shop/posts/temp-list');
                const data = await response.json();
                if (isMountedRef.current) {
                    setPosts(data);
                }
            } catch (error) {
                console.error('Error fetching temporary posts:', error);
            }
        };

        fetchTemporaryPosts();

    }, []);

    return (
        <S.ModalOverlay>
            <S.ModalContent>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{ fontWeight: 'bold' }}> 임시저장 목록</div>
                    <Button onClick={closeModal}>닫기</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {posts.length > 0 ? (
                        posts.map((post: any) => (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <ListItemText key={post.postId}>{post.title}</ListItemText>
                                <ListSubheader>{post.updatedAt}</ListSubheader>
                            </div>

                        ))
                    ) : (
                        <p>임시저장된 항목이 없습니다.</p>
                    )}
                </div>

            </S.ModalContent>
        </S.ModalOverlay>
    );
};
