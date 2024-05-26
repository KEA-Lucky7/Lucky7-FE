import React, { useState, useEffect } from 'react';
import * as S from "../styles/CreatepostCss";
import moaboa from "../../../assets/header/moaboa.png";
import Menu from "../../../assets/header/Menu.png";
import { useNavigate } from "react-router-dom";
import { TemporarySaveModal } from "../createPostItems/TemporarySaveModal";

interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreatePostHeader({ setShowSideMenu }: Props) {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [temporarySaves, setTemporarySaves] = useState<string[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  const changeSideMenuState = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  function goHomePage() {
    navigate("/");
    setShowSideMenu(false);
  }

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const fetchTemporaryPosts = async () => {
      try {
        const response = await fetch('https://vision-necktitude.shop/posts/temp-list');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching temporary posts:', error);
      }
    };

    fetchTemporaryPosts();
  }, []);

  return (
    <S.Header>
      <S.LeftContainer>
        <img
          src={Menu}
          onClick={changeSideMenuState}
          alt="메뉴"
          width={"25px"}
          height={"15px"}
        />

        <img
          src={moaboa}
          onClick={goHomePage}
          alt="로고"
          width={"130px"}
          height={"27px"}
          style={{ marginBottom: "10px", marginLeft: "10px" }}
        />
      </S.LeftContainer>
      <S.RightContainer>
        <S.TemporaryButton onClick={toggleModal}>임시저장&nbsp;|&nbsp;{posts.length}</S.TemporaryButton>
        <S.PostButton>저장하기</S.PostButton>
      </S.RightContainer>

      {isModalVisible && (
        <TemporarySaveModal
          temporarySaves={temporarySaves}
          closeModal={toggleModal}
        />
      )}
    </S.Header>
  );
}
