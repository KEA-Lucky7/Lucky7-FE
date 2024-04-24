import * as S from "./styles/AccountBook";
import { useState } from "react";

interface ExpenseData {
  date: Date;
  amount: number;
}

const expenses: ExpenseData[] = [
  { date: new Date(2024, 3, 2), amount: 48370 },
  { date: new Date(2024, 3, 3), amount: 29470 },
  { date: new Date(2024, 3, 4), amount: 28320 },
  { date: new Date(2024, 3, 6), amount: 21200 },
  { date: new Date(2024, 3, 7), amount: 33200 },
  { date: new Date(2024, 3, 8), amount: 47292 },
  { date: new Date(2024, 3, 13), amount: 95254 },
  // { date: new Date(2024, 3, 18), amount: 48030 },
  { date: new Date(2024, 3, 27), amount: 59744 },
  { date: new Date(2024, 3, 1), amount: 99774 },
  { date: new Date(2024, 3, 5), amount: 72148 },
  { date: new Date(2024, 3, 9), amount: 16851 },
  { date: new Date(2024, 3, 10), amount: 16372 },
  // { date: new Date(2024, 3, 11), amount: 52032 },
  { date: new Date(2024, 3, 12), amount: 22589 },
  { date: new Date(2024, 3, 14), amount: 50275 },
  { date: new Date(2024, 3, 15), amount: 40130 },
  // { date: new Date(2024, 3, 16), amount: 16699 },
  { date: new Date(2024, 3, 17), amount: 19009 },
  { date: new Date(2024, 3, 19), amount: 99351 },
  { date: new Date(2024, 3, 20), amount: 61475 },
  { date: new Date(2024, 3, 21), amount: 18196 },
  { date: new Date(2024, 3, 22), amount: 49230 },
  { date: new Date(2024, 3, 23), amount: 58703 },
  // { date: new Date(2024, 3, 24), amount: 19810 },
  { date: new Date(2024, 3, 25), amount: 76217 },
  { date: new Date(2024, 3, 26), amount: 65435 },
  { date: new Date(2024, 3, 28), amount: 57377 },
  { date: new Date(2024, 3, 29), amount: 44889 },
  { date: new Date(2024, 3, 30), amount: 15428 },
];

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
