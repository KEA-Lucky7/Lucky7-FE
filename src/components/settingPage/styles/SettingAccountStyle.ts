import styled from "styled-components";

export const AccountContainer = styled.div`
  // border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const AccountSettingSelection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // border: 1px solid red;
`;

export const AccountList = styled.div`
  // width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // border: 1px solid blue;
`;

export const Account = styled.div`
  // width: 20%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  padding-right: 8px;
  border-right: 1px solid #b1b1b1;
`;
export const AccountSetting = styled.div`
  // width: 20%;
  height: 100%;
  font-size: 16px;
  font-weight: 300;
  padding-left: 8px;
  color: #b1b1b1;
`;

export const AccountIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 16px;
  background: #ffe500;
  border-radius: 50%;
  margin: 5px;
  // border: 1px solid red;
`;

export const AccountEmail = styled.div`
  width: 50%;
  height: 100%;
  font-size: 16px;
  // border: 1px solid red;
  font-weight: 300;
  margin: 5px;
`;
