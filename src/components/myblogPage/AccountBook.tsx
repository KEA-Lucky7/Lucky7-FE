import * as S from "./styles/AccountBook";
import { useState } from "react";

interface ExpenseData {
  date: Date;
  amount: number;
}

const expenses: ExpenseData[] = [{ date: new Date(2024, 3, 7), amount: 33200 }];

export default function AccountBook() {
  const [type, setType] = useState("calendar");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const [value, onChange] = useState<Date>(new Date());

  const renderTileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      // 해당 날짜의 지출을 찾습니다.
      const expense = expenses.find(
        (exp) =>
          exp.date.getDate() === date.getDate() &&
          exp.date.getMonth() === date.getMonth() &&
          exp.date.getFullYear() === date.getFullYear()
      );
      // 지출이 있으면 표시합니다.
      return expense ? <p>{`${expense.amount.toLocaleString()} 원`}</p> : null;
    }
  };

  return (
    <S.AccountBookContainer>
      <S.Title>가계부보기</S.Title>
      <S.TypeContainer>
        <S.Type>가계부 </S.Type>
        <S.line></S.line>
        <S.Type> 글목록</S.Type>
      </S.TypeContainer>
      {/* <S.MonthControl>
        <S.Month>{year + "." + month}</S.Month>
        <S.MonthButton>⟨</S.MonthButton>
        <S.MonthButton>⟩</S.MonthButton>
      </S.MonthControl> */}
      <S.StyledCalendar
        calendarType="US"
        // onChange={onChange}
        value={value}
        tileContent={renderTileContent}
      />
    </S.AccountBookContainer>
  );
}
