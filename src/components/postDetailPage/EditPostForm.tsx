import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface EditPostFormProps {
  post: {
    postId: number;
    title: string;
    content: string;
    preview: string;
    thumbnail: string;
    mainHashtag: string;
    postType: string;
    hashtagList: string[];
    walletList: {
      consumedDate: string;
      walletType: string;
      memo: string;
      amount: number;
    }[];
  };
  onCancel: () => void;
  onSubmit: (updatedPost: any) => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ post, onCancel, onSubmit }) => {
  const [editedPost, setEditedPost] = useState(post);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleWalletListChange = (index: number, key: string, value: string | number) => {
    const updatedWalletList = [...editedPost.walletList];
    (updatedWalletList[index] as any)[key] = value;
    setEditedPost((prevPost) => ({
      ...prevPost,
      walletList: updatedWalletList,
    }));
  };

  const handleEditSubmit = async () => {
    try {
      const translatedPost = {
        ...editedPost,
        postType: editedPost.postType === "자유글" ? "FREE" : editedPost.postType === "가계부" ? "WALLET" : editedPost.postType
      };

      const response = await axios.patch(`https://vision-necktitude.shop/posts/${post.postId}`, translatedPost, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJpZCI6IjE1Iiwic3ViIjoiQWNjZXNzVG9rZW4iLCJpYXQiOjE3MTc2NDczODgsImV4cCI6MTcxNzY1NDU4OX0.BRPdNxV76iuujXpoaec8EtFqF3UFE5rqtvI7Jh4-kC8'
        }
      });

      if (response.status === 200) {
        onSubmit(response.data);
        alert('글이 성공적으로 수정되었습니다.');
        navigate('/myblog');
      } else {
        alert('글 수정에 실패하였습니다.');
      }
    } catch (error) {
      console.error('Error updating the post:', error);
      alert('글 수정 과정 중 에러가 발생하였습니다.');
    }
  };

  return (
    <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', width: '33vw', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={editedPost.title}
          onChange={handleChange}
          placeholder="Title"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Content</label>
        <textarea
          name="content"
          value={editedPost.content}
          onChange={handleChange}
          placeholder="Content"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Main Hashtag</label>
        <input
          type="text"
          name="mainHashtag"
          value={editedPost.mainHashtag}
          onChange={handleChange}
          placeholder="Main Hashtag"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Post Type</label>
        <select
          name="postType"
          value={editedPost.postType}
          onChange={handleChange}
        >
          <option value="자유글">자유글</option>
          <option value="가계부">가계부</option>
        </select>
      </div>
      {editedPost.walletList.map((walletItem, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>Consumed Date</label>
          <input
            type="text"
            value={walletItem.consumedDate}
            onChange={(e) => handleWalletListChange(index, 'consumedDate', e.target.value)}
            placeholder="Consumed Date"
          />
          <label>Memo</label>
          <input
            type="text"
            value={walletItem.memo}
            onChange={(e) => handleWalletListChange(index, 'memo', e.target.value)}
            placeholder="Memo"
          />
          <label>Amount</label>
          <input
            type="number"
            value={walletItem.amount}
            onChange={(e) => handleWalletListChange(index, 'amount', parseInt(e.target.value))}
            placeholder="Amount"
          />
          <label>Wallet Type</label>
          <input
            type="text"
            value={walletItem.walletType}
            onChange={(e) => handleWalletListChange(index, 'walletType', e.target.value)}
            placeholder="(FOOD, TRAFFIC, LEISURE, EDUCATION, LIFE, FINANCE)"
          />
        </div>
      ))}
      <button onClick={handleEditSubmit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditPostForm;