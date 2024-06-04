import styled from "styled-components";

export const SettingContainer = styled.div`
  width: 50vw;
  height: 100%;
  margin: 0 auto;
  border: 1px solid red;
`;

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

export const AlertBox = styled(AccountBox)`
  margin-top: 100px;
`;

export const FirstLine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const SecondLine = styled(FirstLine)`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.div`
  width: 20%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
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
`;

export const EmailText = styled.div`
  width: 50%;
  height: 100%;
  font-size: 16px;
`;

export const Secede = styled.div`
  margin: 50px 0px 50px 10px;
  font-size: 16px;
  color: #616161;
`;
