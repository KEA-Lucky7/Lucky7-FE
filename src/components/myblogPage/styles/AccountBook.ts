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

export const ExpenseCalculationContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const CalculationTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const CalculationSubTitle = styled.div`
  color: #828282;
  font-size: 15px;
  margin-bottom: 8px;
`;

export const ExpenseCalculationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  // border: 1px solid red;
`;

export const DateInput = styled.input`
  width: 80px;
  padding: 5px;
  text-align: center;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Amount = styled.span`
  background-color: #e9e9e9;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  color: #4566e3;
`;

export const StyledCalendar = styled(Calendar)`
  margin-top: 35px;
  width: 100%; /* 캘린더의 너비 조정 */
  max-width: 100%; /* 최대 너비 설정 */
  font-size: 15px; /* 전체 폰트 크기 조정 */
  border-radius: 5px;

  .react-calendar__tile {
    max-width: 14.285%; /* 7일이므로 전체 너비의 1/7 */
    height: 90px; /* 타일의 높이 조정 */
    border: 1px solid #ccc; /* 테두리 */
    position: relative;

    abbr {
      text-decoration: none; /* 밑줄 제거 */
      font-size: 12px; /* 글자 크기 조정 */
      color: #292929; /* 글자 색상 */
      position: absolute;
      top: 5px; /* 상단 여백 조정 */
      right: 5px; /* 오른쪽 여백 조정 */
    }
  }

  .react-calendar__tile--active {
    background: none;
    font-size: 15px; /* 활성 타일 폰트 크기 조정 */
    font-weight: 500;
    color: #333;
  }

  .react-calendar__tile-content {
    color: #000;
    font-size: 15px; /* 타일 내용 폰트 크기 조정 */
  }

  .react-calendar__tile--now > abbr {
    // font-weight: 600;
    font-size: 15px;
    color: #4566e3;
  }

  .react-calendar__tile--now {
    background: none;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #000;
  }
`;
