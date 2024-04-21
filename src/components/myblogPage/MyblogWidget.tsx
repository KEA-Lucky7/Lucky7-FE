import { Link } from 'react-router-dom';
import * as S from "./styles/MyblogWidgetCss";
import nameEditbutton from "../../assets/myblog/nameEditbutton.png"
export default function MyblogWidget() {
  return (
    <S.MyblogWidgetContainer>
      <S.Picturecontainer>
      </S.Picturecontainer>
      <div style={{display:'flex', flexDirection: 'column', textAlign: 'left'}}>
        <S.UserNickname>
          김성섭
          <img src={nameEditbutton} alt='수정' style={{width:'12px', height:'12px'}}/>
        </S.UserNickname>
        <S.UserId>
          안녕하세요 블로그 소개글입니다.
        </S.UserId>
        <S.CreateNewpostButtonContainer>
          <Link to="/write" style={{ textDecoration: "none", color: 'white' }}>
            글쓰기
          </Link>
        </S.CreateNewpostButtonContainer>
      </div>
    </S.MyblogWidgetContainer>
  )
}
