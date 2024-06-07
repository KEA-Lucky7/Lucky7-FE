import styled from 'styled-components';
import InputComment from './InputComment';
import { useParams } from 'react-router-dom';

const CommentComp = () => {

  const { postId } = useParams<{ postId: string }>();

  const handleCommentSubmit = () => {

  };

  return (
    <Container>
      <InputComment
        className="custom-input"
        placeholder={String(postId)}
        onClick={handleCommentSubmit}
        postId={Number(postId)}
      />
    </Container>
  );
};

export default CommentComp;

const Container = styled.div`
  width: 100%;
`;