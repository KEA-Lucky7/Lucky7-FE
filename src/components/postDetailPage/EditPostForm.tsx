import React, { useState, useEffect } from "react";

interface EditPostFormProps {
    editedPost: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, index?: number, field?: string) => void;
    onSubmit: (updatedPost: any) => void;
    onCancel: () => void;
    isEditing: boolean;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ editedPost, onChange, onSubmit, onCancel, isEditing }) => {
    const [editedValues, setEditedValues] = useState({
        ...editedPost,
        postType: editedPost.postType === "FREE" ? "자유글" : editedPost.postType === "WALLET" ? "가계부" : editedPost.postType,
        hashtagList: Array.isArray(editedPost.hashtagList) ? editedPost.hashtagList : []
    });

    useEffect(() => {
        console.log("Setting editedValues:", editedPost); // Log to check initial values
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

        // Define translations for postType values
        const postTypeTranslations: { [key: string]: string } = {
            '자유글': 'FREE',
            '가계부': 'WALLET'
        };

        // Define translations for field names
        const fieldTranslations: { [key: string]: string } = {
            'hashtagList': 'hashtagList',
            'walletList': 'walletList'
        };

        // Check if the name is postType and translate the value accordingly
        const translatedValue = postTypeTranslations[name] || value;

        // Check if the name is hashtagList or walletList and update the respective list
        const listName = fieldTranslations[name] || name;
        const newList = index !== undefined && field
            ? editedValues[listName].map((item: any, i: number) =>
                i === index ? { ...item, [field]: value } : item)
            : value;

        // Update the editedValues state
        setEditedValues(prev => ({
            ...prev,
            [listName]: newList,
            [name]: translatedValue
        }));
    };

    const handleFormSubmit = () => {
        onSubmit(editedValues);
    };

    useEffect(() => {
        console.log("Post Type value in editedValues:", editedValues.postType); // Log to check postType value
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
            <select value={editedValues.postType === "FREE" ? "자유글" : editedValues.postType === "WALLET" ? "가계부" : ''} onChange={(e) => handleEditChange(e)} name="postType">
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