import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles/AccountBook";

interface ExpenseData {
  date: Date;
  amount: number;
}

const AccountBook = () => {
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);
  // const [value, setValue] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<string>("2024.04.04");
  const [endDate, setEndDate] = useState<string>(
    new Date().toISOString().split("T")[0].replace(/-/g, ".")
  );
  const value = new Date();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(
          "https://vision-necktitude.shop/posts/calender",
          {
            headers: {
              Authorization:
                "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJpZCI6IjciLCJzdWIiOiJBY2Nlc3NUb2tlbiIsImlhdCI6MTcxNzMyNDk0NCwiZXhwIjoxNzE3MzMyMTQ0fQ.cnnjC8J1OIA9y-19KMPVpDk-pG4VK3xosgcDhmRbPLk",
            },
            params: {
              month: "2024.05", // 조회하고 싶은 월
              specificDate: "2024.04.10", // 특정 날짜
            },
          }
        );

        console.log("API response:", response); // 추가된 디버깅 정보

        if (response.data && response.data.consumedList) {
          const fetchedExpenses = response.data.consumedList.map(
            (item: any) => ({
              date: new Date(item.consumedDate),
              amount: item.amount,
            })
          );
          setExpenses(fetchedExpenses);
        } else {
          console.error("Invalid response structure:", response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.message);
          if (error.response) {
            console.error("Error response data:", error.response.data); // 서버 응답 오류
            console.error("Error response status:", error.response.status); // 서버 응답 상태 코드
          }
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };

    fetchExpenses();
  }, []);

  const calculateTotalAmount = (start: string, end: string) => {
    const startDate = new Date(start.replace(/\./g, "-"));
    const endDate = new Date(end.replace(/\./g, "-"));
    return expenses
      .filter((exp) => exp.date >= startDate && exp.date <= endDate)
      .reduce((acc, exp) => acc + exp.amount, 0);
  };

  const accountBookData = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const expense = expenses.find(
        (exp) =>
          exp.date.getDate() === date.getDate() &&
          exp.date.getMonth() === date.getMonth() &&
          exp.date.getFullYear() === date.getFullYear()
      );
      return expense ? <p>{`${expense.amount.toLocaleString()} 원`}</p> : null;
    }
  };

  return (
    <S.AccountBookContainer>
      <S.Title>가계부보기</S.Title>

      <S.StyledCalendar
        calendarType="gregory"
        value={value}
        tileContent={accountBookData}
      />

      <S.ExpenseCalculationContainer>
        <S.ExpenseCalculationItem>
          <label>
            <S.DateInput
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            부터 오늘까지 총 소비 금액
            <S.DateInput
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              disabled
            />
          </label>
          <S.Amount>
            {calculateTotalAmount(startDate, endDate).toLocaleString()} 원
          </S.Amount>
        </S.ExpenseCalculationItem>

        <S.ExpenseCalculationItem>
          <label>
            <S.DateInput
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            부터
            <S.DateInput
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            까지 총 소비 금액
          </label>
          <S.Amount>
            {calculateTotalAmount(startDate, endDate).toLocaleString()} 원
          </S.Amount>
        </S.ExpenseCalculationItem>

        <S.ExpenseCalculationItem>
          <label>
            <S.DateInput
              type="text"
              value={(new Date().getMonth() + 1).toString().padStart(2, "0")}
              disabled
            />
            월 소비 금액
          </label>
          <S.Amount>
            {calculateTotalAmount(
              `${new Date().getFullYear()}.${(new Date().getMonth() + 1)
                .toString()
                .padStart(2, "0")}.01`,
              endDate
            ).toLocaleString()}{" "}
            원
          </S.Amount>
        </S.ExpenseCalculationItem>
      </S.ExpenseCalculationContainer>
    </S.AccountBookContainer>
  );
};

export default AccountBook;
