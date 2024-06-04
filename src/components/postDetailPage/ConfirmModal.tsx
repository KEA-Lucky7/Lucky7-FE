import React from 'react';

// Props 타입을 위한 인터페이스 정의
interface ConfirmModalProps {
  isVisible: boolean;
  onConfirm: () => void; // onConfirm은 매개변수를 받지 않고 반환값이 없는 함수
  onCancel: () => void; // onCancel도 마찬가지
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isVisible, onConfirm, onCancel }) => {
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