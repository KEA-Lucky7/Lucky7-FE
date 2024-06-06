import { useState, useEffect } from "react";
import * as S from "../styles/QuizStyle";

interface QuizData {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  quizAnswer: number; // 정답을 표시하는 번호
}

export default function Quiz() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOption(null);
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          "https://vision-necktitude.shop/quiz/quiz"
        );
        const data = await response.json();

        if (data.data) {
          setQuizData(data.data);
        } else {
          alert("퀴즈 데이터를 불러오는 중 오류가 발생했습니다.");
        }
      } catch (error) {
        alert("퀴즈 데이터를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswer = async () => {
    if (selectedOption === null) {
      alert("옵션을 선택하세요.");
      return;
    }

    try {
      const response = await fetch(
        "https://vision-necktitude.shop/quiz/grade",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedAnswer: selectedOption }),
        }
      );
      const data = await response.json();

      if (data.data.correct) {
        alert("정답입니다!");
      } else {
        alert("틀렸습니다!");
      }

      setTimeout(() => {
        handleCloseModal();
      }, 2000); // 2초 후 모달 닫기
    } catch (error) {
      alert("퀴즈를 확인하는 도중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <S.QuizContainer onClick={handleOpenModal}>Quiz</S.QuizContainer>
      {isModalVisible && quizData && (
        <S.Modal>
          <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
          <S.Title>모아보아 금융-경제 퀴즈</S.Title>

          <S.QuizTitle>{quizData.question}</S.QuizTitle>
          <S.AnswerBox>
            {[
              quizData.option1,
              quizData.option2,
              quizData.option3,
              quizData.option4,
              quizData.option5,
            ].map((option, index) => (
              <S.AnswerButton
                key={index}
                onClick={() => setSelectedOption(index + 1)}
                disabled={selectedOption === index + 1}
                selected={selectedOption === index + 1}
              >
                {option}
              </S.AnswerButton>
            ))}
          </S.AnswerBox>
          <S.SubmitButton
            onClick={handleAnswer}
            disabled={selectedOption === null}
          >
            선택했어요
          </S.SubmitButton>
        </S.Modal>
      )}
    </>
  );
}
