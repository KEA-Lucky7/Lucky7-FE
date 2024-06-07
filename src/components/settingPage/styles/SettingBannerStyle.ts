import styled from "styled-components";

interface SaveButtonProps {
  modified: String;
}

// interface PictureContainerProps {
//   backgroundImage: string;
// }

export const profileTitle = styled.div`
  height: 100%;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 30px;
`;

export const AccountBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

export const BannerBox = styled(AccountBox)`
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

export const BannerImg = styled.img`
  width: 50vw;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const BannerInputBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const ImgInput = styled.input`
  display: none;
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
  transition: background-color 0.3s ease; /* Add transition for smooth color change */
  font-size: 14px;

  &:hover {
    background-color: ${(props) =>
      props.modified == "true"
        ? "#616161"
        : "#DADADA"}; /* Change color on hover */
  }
`;

export const TitleContainer = styled.div`
  width: 450px;
  position: absolute;
  text-align: left;
  bottom: 40px;
  left: 40px;
`;

export const TitleBox = styled.div`
  font-size: 28px;
  background-color: none;
  color: white;
`;

export const SubTitleBox = styled(TitleBox)`
  font-size: 14px;
  top: 90%;
  left: 8%;
`;
