import styled from "styled-components";

interface SaveButtonProps {
  modified: string;
}

export const profileBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  // border: 1px solid red;
`;

export const profileTitle = styled.div`
  height: 100%;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 30px;
`;

export const profileContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 100px;
  // border: 1px solid red;
`;

export const Img = styled.img`
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ImgInput = styled.input`
  display: none;
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
  padding: 0px 5px 0px 5px;
  border: none;
  background: #fffef9;
  border-bottom: 1px solid #ddd;
  // border-radius: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  &:focus {
    border: 1px solid #bbb;
    outline: none;
  }
`;

export const IntroInput = styled.input`
  margin: 7px 0px 7px 0px;
  background: #fffef9;
  padding: 0px 5px 0px 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  &:focus {
    border: 1px solid #bbb;
    outline: none;
  }
`;

export const CharCount = styled.span`
  width: 100%;
  font-size: 12px;
  text-align: right;
`;

export const SaveButton = styled.button<SaveButtonProps>`
  background-color: ${(props) =>
    props.modified == "true" ? "#7A7A7A" : "#E6E6E6"};
  color: ${(props) => (props.modified == "true" ? "#fff" : "#333")};
  padding: 10px 20px;
  margin-right: 10px;
  align-self: flex-end;
  width: 100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;

  &:hover {
    background-color: ${(props) =>
      props.modified == "true" ? "#616161" : "#DADADA"};
  }
`;
