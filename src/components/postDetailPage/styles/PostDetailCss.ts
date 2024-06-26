import styled from "styled-components";

interface PictureContainerProps {
  imageUrl: string;
}

export const All = styled.div`
    background-color: #fffef9;;
`;

export const Container = styled.div`
  width: 100%;
  // height: 100%;
  position: relative;
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
    background-color: #fffef9;
`;

export const Picturecontainer = styled.div<PictureContainerProps>`
  width: 67%;
  height: 400px;
  //   margin-top: 10px;
  position: relative;
  background: ${({ imageUrl }) =>
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl}) no-repeat center center`};
  background-size: cover;
  border-radius: 5px;
  margin: 0 auto;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  left: 20px;
  //   align-items: center;
  //   border: solid 1px red;
`;

export const FirstLine = styled.div`
  //   width: auto;
  display: flex;
  gap: 20px;
  font-size: 16px;
  top: 210px;
  left: 20px;
  color: white;
  //   border: solid 1px blue;
  > div {
    font-weight: 300;
  }
`;

export const SecondLine = styled.div`
  color: white;
  font-size: 40px;
  > div {
    font-weight: 400;
  }
`;

export const ThirdLine = styled.div`
  display: flex;
  gap: 20px;
  color: white;
  > div {
    font-weight: 300;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  //   border: 1px solid blue;
    background-color: #fffef9;
`;

export const PostIntro = styled.div`
  width: 33%;
  height: 100%;
  margin: 0 auto;
  //   border: 1px solid blue;
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: right;
  justify-content: right;
  padding-top: 10px;
`;

export const FuncContainer = styled.div`
  //   border: solid 1px red;
  width: 75px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    font-weight: 300;
  }
`;

export const PostBox = styled(PostIntro)`
  //   border: solid 1px red;
  width: 33vw;
  flex-direction: column;
  text-align: left;
  justify-content: left;
`;

export const TagBox = styled(PostIntro)`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 10px;
  //   border: solid 1px red;
`;

export const PictureBox = styled.div`
  //   border: solid 1px red;
  display: flex;
  width: 20%;
  //   height: 100%;
  //   margin-left: 40px;
  //   margin-right: 20px;
`;

export const ContentBox = styled.div`
  //   width: 30%;
  //   height: 50%;
  //   border: 1px solid blue;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  justify-content: left;
  //   padding-top: 10px;
`;

export const FirstTag = styled.div`
  width: 30%;
  height: 30px;
  border-radius: 7px;
  background-color: #eaeaea;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #49519e;
`;

export const SecondTag = styled(FirstTag)`
  width: 15%;
  height: 30px;
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const CommentBox = styled.div`
  width: 33%;
  height: 100%;
  margin: 0 auto;
  //   border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const ProfileBox = styled.div`
  width: 33%;
  height: 150px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  //   border: 1px solid red;
  display: flex;
  gap: 60px;
  align-items: center;
  //   justify-content: center;
  //   padding-top: 50px;
`;

export const Commment = styled.div`
  width: 100%;
  height: 100%;
  //   border: 1px solid blue;
  gap: 20px;
  display: flex;
  flex-direction: row;
`;

export const HeartBox = styled.div`
  width: 100%;
  height: 20%;
  //   border: 1px solid blue;
`;

export const postDetailList = styled.div`
  width: 33%;
  height: 30%;
  //   border: 1px solid blue;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 50px;
`;

export const postDetailListTitle = styled.div`
  width: 30%;
  //   border: 1px solid blue;
  font-size: 24px;
  font-weight: bold;
  //   margin-left: 40px;
`;

export const postDetailListBox = styled.div`
  width: 100%;
  height: 100%;
  //   border: 1px solid blue;
`;

export const PaginationBox = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageNumber = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 300;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

export const ListBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  //   text-decoration: none;
  align-items: center;
  justify-content: space-between;
  //   border: 1px solid blue;
`;

export const ListTitle = styled.div`
  //   width: 70%;
  height: 30px;
  text-align: left;
  font-size: 16px;
  display: flex;
  align-items: center;
  //   margin-left: 40px;
  //   border: 1px solid red;
`;

export const CheckField = styled.div`
  //   border: 1px solid red;
  //   width: 20%;
  height: 30px;
  font-weight: 300;

  vertical-align: middle;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBox = styled.div`
  width: 33%;
  height: 100%;
  //   border: 1px solid blue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  margin: 0 auto;
  gap: 10px;
  text-align: center;
`;


export const WalletListBox = styled.div`
  width: 33vw;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 30px;

  div {
    font-size: 18px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 16px;
    text-align: left;

    th, td {
      padding: 12px;
      border: 1px solid #ddd;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const WalletItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin: 0 auto;

  &:last-child {
    border-bottom: none;
  }

  div {
    margin: 5px 0;
  }
`;

export const AIBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
`;

export const AIReporContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: 16px;
  margin: 25px 0 20px 0;
  padding: 12px;
  border-radius: 8px;
  letter-spacing: 1px;
  background: #ececec;
  border: 1px solid #d4d4d4;
  display: flex;
  justify-content: space-evenly;
`;

export const AILogo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #4566e3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const AIContent = styled.div`
  width: 90%;
  // border: 1px solid red;
  color: #393939;
  align-items: center;
  width: 90%;
  color: #393939;
  display: flex;
`;
