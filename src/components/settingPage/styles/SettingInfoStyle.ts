import styled from "styled-components";

interface SaveButtonProps {
  modified: boolean;
}

export const Title = styled.div`
  width: 90%;
  height: 100%;
  font-size: 28px;
  font-weight: bold;
  border-bottom: 1px solid grey;
  padding-bottom: 30px;
`;

export const profileTitle = styled(Title)`
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: none;
`;

export const AccountBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  border: 1px solid blue;
`;

export const profileBox = styled(AccountBox)`
  margin-top: 100px;
`;

export const profileContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 0px;
  gap: 100px;
`;

export const Img = styled.img`
  width: 190px;
  height: 190px;
`;


export const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FirstInputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SecondInputBox = styled(FirstInputBox)`
  margin-top: 10px;
`;

export const InputTitle = styled.div`
  width: 80%;
  height: 100%;
  font-size: 14px;
  margin-bottom: 5px;
  color: #626262;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
  border-radius: 10px;
`;

export const InputIntroduce = styled.textarea`
  width: 100%;
  height: 80px;
  border: 1px solid #eaeaea;
  outline: none;
  border-radius: 5px;
  resize: none;
  border-radius: 10px;
`;

export const CharCount = styled.span`
  width: 100%;
  font-size: 12px;
  text-align: right;
`;

export const SaveButton = styled.button<SaveButtonProps>`
  background-color: ${(props) => (props.modified ? "#7A7A7A" : "#E6E6E6")};
  color: ${(props) => (props.modified ? "#fff" : "#fff")};
  padding: 10px 20px; /* Adjust padding as needed */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Add transition for smooth color change */
  font-size: 14px;

  &:hover {
    background-color: ${(props) =>
      props.modified ? "#616161" : "#DADADA"}; /* Change color on hover */
  }
`;