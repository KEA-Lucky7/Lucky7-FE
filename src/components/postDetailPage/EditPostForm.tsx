import React, { useState, useEffect } from "react";

interface EditPostFormProps {
    editedPost: EditedPost;
    onSubmit: (updatedPost: EditedPost) => void;
    onCancel: () => void;
    isEditing: boolean;
}

interface EditedPost {
    title: string;
    content: string;
    preview: string;
    thumbnail: string | null;
    mainHashtag: string;
    postType: string;
    hashtagList: string[];
    walletList: WalletEntry[];
}

interface WalletEntry {
    consumedDate: string;
    memo: string;
    amount: number;
    walletType: string;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ editedPost, onSubmit, onCancel, isEditing }) => {
    const [editedValues, setEditedValues] = useState<EditedPost>({
        ...editedPost,
        postType: editedPost.postType === "FREE" ? "자유글" : editedPost.postType === "WALLET" ? "가계부" : editedPost.postType,
    });

    useEffect(() => {
        console.log("Setting editedValues:", editedPost);
        setEditedValues({
            ...editedPost,
            postType: editedPost.postType === "FREE" ? "자유글" : editedPost.postType === "WALLET" ? "가계부" : editedPost.postType
        });
    }, [editedPost]);

    const handleEditChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
        index?: number,
        field?: string
    ) => {
        const { name, value } = e.target;

        const postTypeTranslations: { [key: string]: string } = {
            '자유글': 'FREE',
            '가계부': 'WALLET'
        };

        const translatedValue = postTypeTranslations[value] || value;

        if (index !== undefined && field) {
            const updatedList = editedValues[name as keyof EditedPost] as WalletEntry[];
            updatedList[index] = {
                ...updatedList[index],
                [field]: value
            };
            setEditedValues((prev) => ({
                ...prev,
                [name]: updatedList
            }));
        } else {
            setEditedValues((prev) => ({
                ...prev,
                [name]: translatedValue
            }));
        }
    };

    const handleFormSubmit = () => {
        const translatedPost = {
            ...editedValues,
            postType: editedValues.postType === "자유글" ? "FREE" : editedValues.postType === "가계부" ? "WALLET" : editedValues.postType
        };
        onSubmit(translatedPost);
    };

    useEffect(() => {
        console.log("Post Type value in editedValues:", editedValues.postType);
    }, [editedValues]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '33vw', margin: '0 auto', gap: '20px' }}>
            <label>Title:</label>
            <input type="text" value={editedValues.title} onChange={(e) => handleEditChange(e)} name="title" />
            <label>Content:</label>
            <textarea value={editedValues.content} onChange={(e) => handleEditChange(e)} name="content" />
            <label>Preview:</label>
            <input type="text" value={editedValues.preview} onChange={(e) => handleEditChange(e)} name="preview" />
            <label>Main Hashtag:</label>
            <input type="text" value={editedValues.mainHashtag} onChange={(e) => handleEditChange(e)} name="mainHashtag" />
            <label>Post Type:</label>
            <select value={editedValues.postType} onChange={(e) => handleEditChange(e)} name="postType">
                <option value="">Select Post Type</option>
                <option value="자유글">자유글</option>
                <option value="가계부">가계부</option>
            </select>
            <label>Hashtag List:</label>
            {editedValues.hashtagList.map((tag, index) => (
                <div key={index}>
                    <input type="text" value={tag} onChange={(e) => handleEditChange(e, index, "hashtagList")} name="hashtagList" />
                </div>
            ))}
            <label>Wallet List:</label>
            {editedValues.walletList.map((walletItem, index) => (
                <div key={index}>
                    <input type="text" value={walletItem.consumedDate} onChange={(e) => handleEditChange(e, index, "consumedDate")} name="walletList" />
                    <input type="text" value={walletItem.memo} onChange={(e) => handleEditChange(e, index, "memo")} name="walletList" />
                    <input type="number" value={walletItem.amount} onChange={(e) => handleEditChange(e, index, "amount")} name="walletList" />
                    <select value={walletItem.walletType} onChange={(e) => handleEditChange(e, index, "walletType")} name="walletList">
                        <option value="">타입 선택</option>
                        <option value="FOOD">FOOD</option>
                        <option value="TRAFFIC">TRAFFIC</option>
                        <option value="LEISURE">LEISURE</option>
                        <option value="EDUCATION">EDUCATION</option>
                        <option value="LIFE">LIFE</option>
                        <option value="FINANCE">FINANCE</option>
                    </select>
                </div>
            ))}
            <button onClick={handleFormSubmit}>수정</button>
            {isEditing && <button onClick={onCancel}>취소</button>}
        </div>
    );
};

export default EditPostForm;
