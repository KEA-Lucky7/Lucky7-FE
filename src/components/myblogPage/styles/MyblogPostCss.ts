import styled from "styled-components";

export const BlogContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 1000px;
`;

export const MyblogPostContainer = styled.div`
  width: 100%;
  height: 1000px;
`;

export const Picturecontainer = styled.div`
  width: 75%;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
`;

export const PostContainer = styled.div`
  width: 75%;
  height: 800px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

export const LeftSection = styled.div`
  width: 30%;
  height: 90%;

  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
`;

export const TitleBox = styled.div`
  padding: 10px 20px;
  font-size: 28px;
  background-color: none;
  color: white;
  position: absolute;
  top: 80%;
  left: 15%;
  transform: translate(-50%, -50%);
`;

export const SubTitleBox = styled(TitleBox)`
  font-size: 14px;
  top: 90%;
  left: 8%;
`;

export const FixandDelete = styled.div`
  width: 25%;
  height: 10px;
  border: 1px solid black;
  margin: 0px 15px 10px auto;
  font-size: 10px;
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  vertical-align: middle;
  font-size: 32px;
  font-weight: bold;
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

export const PostName = styled.div`
  width: 80%;
  height: 30px;
  margin: 0 auto;
  border: 1px solid green;
  font-size: 12px;
  font-weight: bold;
`;

export const PostWriter = styled.div`
  width: 80%;
  height: 30px;
  margin: 0 auto;
  border: 1px solid green;
  font-size: 12px;
`;

export const PostDate = styled.div`
  width: 80%;
  height: 30px;
  margin: 0 auto;
  border: 1px solid green;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;

export const SubTitleContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubTitle = styled.div`
  width: 30%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
`;

export const IconBox = styled.div`
  width: 20%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  border: 1px solid black;
`;

export const DropDownMenu = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid blue;
`;

export const PostListContainer = styled.div`
  width: 100%;
  height: 100%px;
`;

export const FieldBox = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const PictureListBox = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: row;
  text-align: center;
  border: 1px solid red;
`;

export const PictureList = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const PictureBox = styled.div`
  width: 30%;
  width: 30%;
  border: 1px solid red;
`;

export const FirstLine = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  flex-direction: row;
  border: 1px solid blue;
  text-align: left;
`;

export const TitleField = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
`;

export const ListCategory = styled.div`
  width: 20%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageNumber = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
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

export const ListTitle = styled.div`
  width: 70%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  text-align: left;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const ListTag = styled.div`
  width: 10%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  border-radius: 10px;
  background-color: #eaeaea;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #49519e;
`;

export const DateField = styled.div`
  width: 20%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CheckField = styled.div`
  width: 10%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PictureListCategory = styled.div`
  width: 30%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PictureListTag = styled.div`
  width: 25%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  border-radius: 10px;
  background-color: #eaeaea;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #49519e;
`;

export const PictureListTitle = styled.div`
  width: 80%;
  height: 25px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid green;
  text-align: left;
`;

export const PictureListContent = styled.div`
  width: 90%;
  height: 40px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid green;
  text-align: left;
`;
