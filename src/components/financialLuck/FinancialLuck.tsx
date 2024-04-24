import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 280px;
  height: 340px;
  border: solid 1px grey;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  font-family: "Roboto", sans-serif;
`;

const Img = styled.img`
  width: 150px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  //   margin-bottom: 20px;
`;

const InputForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  width: 100px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  margin-left: 3px;
  &:hover {
    background-color: #218838;
  }
`;

const ResultContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const InputContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const FortuneOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); 
    z-index: 2; 
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px); 
`;

interface Props {
  setShowFortuneModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function FinancialLuck({ setShowFortuneModal }: Props) {
  const [userDate, setUserDate] = useState<string>("");
  const [userGender, setUserGender] = useState<'male'|'female'>('male');
  const [resultData, setResultData] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);

  const userDateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value)) && value.length <= 8) {
      setUserDate(value);
    }
  };

  const showResultHandler = () => {
    setUserDate("");
    setShowResult(false);
  };

  const fetchData = async () => {
    try {
      const currentDate = new Date().toISOString().split("T")[0];
      const response = await axios.post("https://asia-northeast3-moaboa77.cloudfunctions.net/get-lucky-functions", {
        birthDate: userDate.toString(),
        gender: userGender,
        today: currentDate.toString(),
      });
      setResultData(response.data);
      setShowResult(true);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const hideFortuneModal = () =>{
    setShowFortuneModal(false);
  } 

  return (
    <FortuneOverlay onClick={hideFortuneModal}>
    <Container onClick={(e) => e.stopPropagation()}>
      <Img src="/picture/img_coin.png" alt="FinancialLuck Img" />
      {showResult ? (
        <ResultContainer>
          <Title>{resultData}</Title>
          <SubmitButton onClick={showResultHandler}>{"아싸!🎊"}</SubmitButton>
        </ResultContainer>
      ) : (
        <InputContainer>
          <Title>오늘의 운세를 확인해 보세요!</Title>
          <InputForm>
            <Input
              placeholder="생년월일 6자리를 입력하세요"
              value={userDate}
              onChange={userDateHandler}
            ></Input>
            <div>
            <label>
              <Input
                type="radio"
                id="male"
                name="gender"
                onChange={() => setUserGender('male')}
              />
              {"남자"}
            </label>
            <label>
              <Input
                type="radio"
                id="female"
                name="gender"
                onChange={() => setUserGender('female')}
              />
              {"여자"}
            </label>
            </div>
          </InputForm>
          <SubmitButton onClick={fetchData}>확인하기</SubmitButton>
        </InputContainer>
      )}
    </Container>
    </FortuneOverlay>
  );
}

export default FinancialLuck;
