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
  padding: 20px;
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

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.div`
  width: 80%;
  font-size: 14px;
  margin: 5px 0px 5px 0px;
  color: #626262;
`;

export const NameInput = styled.input`
  margin: 7px 0px 7px 0px;
  padding: 0px 20px 0px 20px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    border: 1px solid #ccc;
    outline: none;
  }
`;

export const IntroInput = styled.textarea`
  margin: 7px 0px 7px 0px;
  padding: 0px 20px 0px 20px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    border: 1px solid #ccc;
    outline: none;
  }
`;

export const CharCount = styled.span`
  width: 100%;
  font-size: 12px;
  text-align: right;
`;

export const SaveButton = styled.button`
  background-color: #E6E6E6;
  margin-right: 0px;
  width: 100px;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  align-self: flex-end;

  &:hover {
    background-color: #616161;
  }
`;