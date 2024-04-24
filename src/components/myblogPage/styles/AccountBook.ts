import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const AccountBookContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
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

export const TypeContainer = styled.div`
  //   border: solid 1px red;
  width: 125px;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const Type = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #292929;
`;
export const line = styled.div`
  width: 1px;
  height: 14px;
  background-color: #9e9e9e;
`;

export const MonthControl = styled.div`
  border: solid 1px red;
  margin-top: 30px;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Month = styled.div`
  font-weight: 500;
`;

export const MonthButton = styled.div`
  font-weight: 900;
  margin-bottom: 2px;
`;

export const StyledCalendar = styled(Calendar)`
  margin-top: 35px;
  width: 100%; /* 캘린더의 너비 */
  max-width: 100%; /* 최대 너비 설정 */

  /* 캘린더의 타일 스타일링 */
  .react-calendar__tile {
    max-width: 14.285%; /* 7일이므로 전체 너비의 1/7 */
    height: 120px; /* 타일의 높이 */
    // border-right: 1px solid #ccc; /* 우측 테두리 */
    // border-bottom: 1px solid #ccc; /* 하단 테두리 */
    border: 1px solid #ccc; /* 하단 테두리 */
    position: relative;

    /* 내부 텍스트의 스타일링 */
    abbr {
      text-decoration: none; /* 밑줄 제거 */
      font-size: 15px; /* 글자 크기 조정 */
      color: #666; /* 글자 색상 */
      position: absolute;
      top: 10px;
      right: 8px;
    }
  }

  .react-calendar__tile--active {
    background: none;
    font-size: 100px;
    color: #333; /* change to your preferred font color */
  }

  .react-calendar__tile-content {
    color: #000;
  }

  .react-calendar__tile--now > abbr {
    font-weight: 600;
  }

  .react-calendar__tile--now {
    background: none;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #000;
  }
`;
