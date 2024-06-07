import styled from "styled-components";

export const SettingBackGround = styled.div`
  background: #fffef9;
  // border: 1px solid red;
`;

export const SettingContainer = styled.div`
  // border: 1px solid red;
  width: 50vw;
  // height: 100%;
  margin: 0 auto;
`;

export const Title = styled.div`
  height: 100%;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 30px;
`;

export const profileTitle = styled(Title)`
  height: 100%;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 30px;
`;

export const AccountBox = styled.div`
  // border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

export const AlertBox = styled(AccountBox)`
  margin-top: 100px;
`;

export const FirstLine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  // border: 1px solid red;
`;

export const SecondLine = styled(FirstLine)`
  // width: 40%;
  height: 100%;
`;

export const Text = styled.div`
  width: 20%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
`;

export const Text2 = styled.div`
  width: 80%;
  height: 100%;
  font-size: 16px;
`;

export const SecondText = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: 1px solid red;
`;

export const EmailText = styled.div`
  width: 50%;
  height: 100%;
  font-size: 16px;
  border: 1px solid red;
`;

export const Secede = styled.div`
  margin: 50px 0px 50px 10px;
  font-size: 16px;
  color: #616161;
`;
