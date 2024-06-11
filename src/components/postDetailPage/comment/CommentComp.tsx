import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import InputComment from './InputComment';

interface Reply {
  content: string;
  memberId: number;
  nickname: string;
  profileImg: string;
  createdAt: string;
  commentId: number;
  replyId: number;
}

interface Comment {
  commentId: number;
  memberId: number;
  nickname: string;
  profileImg: string;
  content: string;
  createdAt: string;
  replyList: Reply[];
}

interface CommentData {
  commentList: Comment[];
}

const CommentComp = ({ commentList }: CommentData) => {
  const { postId } = useParams<{ postId: string }>();
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const [activeParentCommentId, setActiveParentCommentId] = useState<number | null>(null);

  const handleCommentSubmit = () => {
    // 댓글 제출 로직
  };

  return (
    <Container>
      <InputComment
        className="custom-input"
        placeholder={String(postId)}
        onClick={handleCommentSubmit}
        postId={Number(postId)}
        commentId={0}
        type="comment"
      />
      <CommentList>
        {commentList.map((comment) => (
          <CommentItem 
            key={comment.commentId} 
            comment={comment} 
            postId={Number(postId)}
            activeCommentId={activeCommentId}
            setActiveCommentId={setActiveCommentId}
            activeParentCommentId={activeParentCommentId}
            setActiveParentCommentId={setActiveParentCommentId}
          />
        ))}
      </CommentList>
    </Container>
  );
};

interface CommentProps {
  comment: Comment,
  postId: number,
  activeCommentId: number | null,
  setActiveCommentId: (id: number | null) => void,
  activeParentCommentId: number | null,
  setActiveParentCommentId: (id: number | null) => void
}

const CommentItem = ({ comment, postId, activeCommentId, setActiveCommentId, activeParentCommentId, setActiveParentCommentId 
}: CommentProps) => {
  const isActive = activeCommentId === comment.commentId;

  return (
    <CommentContainer>
      <CommentHeader>
        <ProfileImg src={comment.profileImg} alt={`${comment.nickname}'s profile`} />
        <Nickname>{comment.nickname}</Nickname>
        <OptionsButton>⋮</OptionsButton>
      </CommentHeader>
      <CommentContent>{comment.content}</CommentContent>
      <CommentFooter>
        <CreatedAt>{comment.createdAt}</CreatedAt>
        <ReplyButton onClick={() => {
          setActiveCommentId(isActive ? null : comment.commentId);
          setActiveParentCommentId(isActive ? null : comment.commentId);
        }}>답글 달기</ReplyButton>
      </CommentFooter>
      <ReplyList>
        {isActive && (
          <InputComment
            className="custom-input"
            placeholder="댓글을 입력하세요"
            onClick={() => {}}
            postId={postId}
            commentId={comment.commentId}
            type="reply"
          />
        )}
        {comment.replyList.map((reply) => (
          <ReplyItem 
            key={reply.replyId} 
            reply={reply} 
            postId={postId}
            activeCommentId={activeCommentId}
            setActiveCommentId={setActiveCommentId}
            activeParentCommentId={activeParentCommentId}
            setActiveParentCommentId={setActiveParentCommentId}
          />
        ))}
      </ReplyList>
    </CommentContainer>
  );
};

interface ReplyProps {
  reply: Reply,
  postId: number,
  activeCommentId: number | null,
  setActiveCommentId: (id: number | null) => void,
  activeParentCommentId: number | null,
  setActiveParentCommentId: (id: number | null) => void
}

const ReplyItem = ({ reply, postId, activeCommentId, setActiveCommentId, activeParentCommentId, setActiveParentCommentId 
}: ReplyProps) => {
  const isActive = activeCommentId === reply.replyId;

  return (
    <ReplyContainer>
      <LShape>ㄴ</LShape>
      <div>
        <ReplyHeader>
          <ProfileImg src={reply.profileImg} alt={`${reply.nickname}'s profile`} />
          <Nickname>{reply.nickname}</Nickname>
        </ReplyHeader>
        <ReplyContent>{reply.content}</ReplyContent>
        <CommentFooter>
          <CreatedAt>{reply.createdAt}</CreatedAt>
          <ReplyButton onClick={() => {
            setActiveCommentId(isActive ? null : reply.replyId);
            setActiveParentCommentId(isActive ? null : reply.commentId);
          }}>답글 달기</ReplyButton>
        </CommentFooter>
        {isActive && (
          <InputComment
            className="custom-input"
            placeholder="답글을 입력하세요"
            onClick={() => {}}
            postId={postId}
            commentId={activeParentCommentId!}
            type="reply"
          />
        )}
      </div>
    </ReplyContainer>
  );
};

export default CommentComp;

const Container = styled.div`
  width: 100%;
`;

const CommentList = styled.div`
  margin-top: 20px;
`;

const CommentContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const ReplyList = styled.div`
  margin-left: 20px;
`;

const ReplyContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
`;

const LShape = styled.div`
  margin-right: 10px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Nickname = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const CreatedAt = styled.div`
  color: gray;
  font-size: 0.9em;
  margin-right: 10px;
`;

const CommentContent = styled.div`
  margin-left: 40px;
  margin-bottom: 5px;
`;

const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const ReplyHeader = styled(CommentHeader)``;

const ReplyContent = styled.div`
  margin-left: 40px;
  margin-bottom: 5px;
`;

const OptionsButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
`;

const ReplyButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
`;
