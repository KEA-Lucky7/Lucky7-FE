import React, { useState } from 'react';
import * as S from "../styles/QuizStyle";
import quizbackground from "../../../assets/quiz/quizbackground.png";
import quizObutton from "../../../assets/quiz/quizObutton.png";
import quizXbuttton from "../../../assets/quiz/quizXbuttton.png";

export default function Quiz() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCorrectAnswer = () => {
        alert("정답입니다");
    };

    const handleIncorrectAnswer = () => {
        alert("틀렸습니다");
    };
    return (
        <>
            <S.QuizContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Quiz
            </S.QuizContainer>
            {isHovered && (
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '91%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    width: '15%',
                    height: '20%',
                    zIndex: '999'
                }}>
                    <div style={{ position: 'relative' }}>
                        <S.Title>금융경제퀴즈</S.Title>
                        <S.SubTitle>모아보아 금융-경제 퀴즈</S.SubTitle>
                        <S.ImgBox>
                            <img src={quizbackground} alt='배경사진' style={{ width: '250px', height: '100px' }} />
                        </S.ImgBox>
                        <S.QuizTitle>주식을 팔 때 항상 세금을 낸다?</S.QuizTitle>
                        <S.AnswerBox style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                            <img src={quizObutton} alt='맞다' style={{ width: '40px', height: '30px' }} onClick={handleCorrectAnswer} />
                            <img src={quizXbuttton} alt='틀림' style={{ width: '40px', height: '30px' }} onClick={handleIncorrectAnswer} />
                        </S.AnswerBox>
                    </div>
                </div>
            )}
        </>
    );
}