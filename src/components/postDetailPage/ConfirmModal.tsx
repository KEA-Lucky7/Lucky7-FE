import React from 'react';

const ConfirmModal = ({ isVisible, onConfirm, onCancel }) => {
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
      }}>
        <h3>게시글을 정말 삭제하시겠습니까?</h3>
        <button onClick={onConfirm} style={{ marginRight: '10px' }}>확인</button>
        <button onClick={onCancel}>취소</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
