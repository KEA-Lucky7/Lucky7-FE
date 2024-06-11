import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  height: 1000px;
`;

export const MyblogPostContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
  font-size: 25px;
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
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubTitle = styled.div`
  width: 30%;
  color: #292929;
  font-size: 15px;
  margin-left: 5px;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-right: 15px;
`;

export const DropDownMenu = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 10px;
`;

export const PostListContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 30px;
`;

export const FieldBox = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  display: flex;
  justify-content: space-around;  /* Changed to space-around for better alignment */
  align-items: center;
  text-align: center;
`;

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;  /* Changed to space-around for better alignment */
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PictureListBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px 4px 0px;
`;

export const PictureList = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const PictureBox = styled.div``;

export const Dropdown = styled.div`
  background-color: #fffef9;
  border-radius: 4px;
  padding: 0px 10px 10px 10px;
`;

export const DropdownItem = styled.div`
  padding: 5px 0;
  cursor: pointer;
  &:hover {
    background-color: #fffef9;
  }
  font-weight: 100;
`;

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const TitleField = styled.div`
  width: 50%;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const ItemField = styled.div`
  width: 10%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  vertical-align: middle;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ListCategory = styled.div`
  width: 10%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  vertical-align: middle;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  width: 50%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;  /* Added text-align for center alignment */
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;  /* Added justify-content for center alignment */
`;

export const ListTag = styled.div`
  width: 10%;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 7px;
  text-align: center;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #49519e;
`;

export const PictureListCategory = styled.div`
  font-size: 16px;
  font-weight: 300;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const PictureListTag = styled.div`
  font-size: 18px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #49519e;
`;

export const PictureListTitle = styled.div`
  width: 80%;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
`;

export const PictureListContent = styled.div`
  width: 90%;
  height: 40px;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: left;
  line-height: 20px;
`;

export const NoPostsMessage = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 18px;
  color: #999;
`;

