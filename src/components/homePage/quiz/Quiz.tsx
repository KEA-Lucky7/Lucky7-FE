import { useState, useEffect } from 'react';
import * as S from "../styles/QuizStyle";
import quizbackground from "../../../assets/quiz/quizbackground.png";

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
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // 선택된 답변

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await fetch('https://vision-necktitude.shop/quiz/quiz');
                const data = await response.json();
                console.log('Full API response:', data);

                if (data.data) {
                    setQuizData(data.data);
                    console.log('Quiz data:', data.data);
                } else {
                    console.error('No quiz data received:', data);
                    //alert("퀴즈 데이터를 불러오는 중 오류가 발생했습니다.");
                }
            } catch (error) {
                console.error('Error fetching quiz data:', error);
                alert("퀴즈 데이터를 불러오는 중 오류가 발생했습니다.");
            }
        };

        fetchQuizData();
    }, []);

    const handleAnswer = async (selectedOption: number) => {
        setSelectedAnswer(selectedOption); // 선택된 답변 저장

        // 정답 여부를 확인하는 API 호출
        try {
            const response = await fetch('https://vision-necktitude.shop/quiz/grade', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    selected_answer: selectedOption
                })
            });
            const data = await response.json();
            console.log(selectedOption);
            console.log(quizData.quizAnswer);
            // 선택한 답변이 정답인지 확인
            if (selectedOption === quizData.quizAnswer) {
                alert("정답입니다!");
            } else {
                alert("틀렸습니다!");
            }

            handleCloseModal(); // 정답 여부 확인 후 모달 닫기
        } catch (error) {
            console.error('Error grading quiz:', error);
            alert("퀴즈를 확인하는 도중 오류가 발생했습니다.");
        }
    };

    return (
        <>
            <S.QuizContainer onClick={handleOpenModal}>
                Quiz
            </S.QuizContainer>
            {isModalVisible && quizData && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    width: '50%',
                    height: '50%',
                    zIndex: '999'
                }}>
                    <div style={{ position: 'relative' }}>
                        <S.Title>금융경제퀴즈</S.Title>
                        <S.SubTitle>모아보아 금융-경제 퀴즈</S.SubTitle>
                        <S.ImgBox>
                            <img src={quizbackground} alt='배경사진' style={{ width: '100%', height: 'auto' }} />
                        </S.ImgBox>
                        <S.QuizTitle>{quizData.question}</S.QuizTitle>
                        <S.AnswerBox style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button onClick={() => handleAnswer(1)}>{quizData.option1}</button>
                            <button onClick={() => handleAnswer(2)}>{quizData.option2}</button>
                            <button onClick={() => handleAnswer(3)}>{quizData.option3}</button>
                            <button onClick={() => handleAnswer(4)}>{quizData.option4}</button>
                            <button onClick={() => handleAnswer(5)}>{quizData.option5}</button>
                        </S.AnswerBox>
                        <button onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'none' }}>X</button>
                    </div>
                </div>
            )}
        </>
    );
}