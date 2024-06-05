import styled from "styled-components";

export const MyblogWidgetContainer = styled.div`
  width: 90%;
  height: 180px;
  // border: 1px solid red;
`;

export const Profilecontainer = styled.div`
  // border: 1px solid blue;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Picturecontainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: #d9d9d9;
  border-radius: 100%;
  margin-top: 10px;
`;

export const UserInfoContainer = styled.div`
  // border: solid 1px red;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const UserNickname = styled.div`
  width: 100%;
  // border: 1px solid green;
  font-weight: 600;
  color: #585858;
  font-size: 18px;
  margin: 3px;
`;

export const UserId = styled.div`
  width: 100%;
  // border: 1px solid green;
  color: #9c9c9c;
  font-size: 13px;
  margin: 3px;
`;

export const CreateNewpostButtonContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #4566e3;
  color: #fff;
  border-radius: 100px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//===========================카테고리 위젯 css===========================

export const MyblogCategoryWidgetContainer = styled.div`
  width: 80%;
  // height: 300px;
  // border: 1px solid green;
  margin: 0 auto;
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  // border: 1px solid red;
`;

export const ContentTitle = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  // border: 1px solid red;
  font-size: 20px;
  display: flex;
  flex-direction: row;
`;

export const Section = styled.div`
  width: 100%;
  // border: solid 1px red;
  margin-left: -60px;
  padding-left: -60px;
`;

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: #d9d9d9;
`;

export const SubCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: #d9d9d9;
`;

export const TagBox = styled.div`
  width: 100%;
  height: 20px;
  margin: 0 auto;
  // border: 1px solid red;
  vertical-align: middle;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100px;
  margin: 0px 0px 0px 25px;
  gap: 5px;
  // border: 1px solid red;
  vertical-align: middle;
`;
