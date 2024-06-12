import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles/AccountBook";
import { useStore } from "../homePage/login/state";

interface ExpenseData {
  date: Date;
  amount: number;
}

const AccountBook = () => {
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);
  const [startDate, setStartDate] = useState<string>(
    `${new Date().getFullYear()}.${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, "0")}.01`
  );
  const [endDate, setEndDate] = useState<string>(
    new Date().toISOString().split("T")[0].replace(/-/g, ".")
  );
  const [month, setMonth] = useState<string>(
    `${new Date().getFullYear()}.${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, "0")}`
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const value = new Date();

  // useStore 훅을 사용하여 accessToken 가져오기
  const { accessToken } = useStore();

  useEffect(() => {
    const fetchExpenses = async () => {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const response = await axios.get(
          "https://vision-necktitude.shop/posts/calender",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              month: month, // 조회하고 싶은 월
              specificDate: endDate, // 특정 날짜
            },
          }
        );

        if (Array.isArray(response.data.consumedList)) {
          const fetchedExpenses = response.data.consumedList.map(
            (item: any) => ({
              date: new Date(item.consumedDate),
              amount: item.amount,
            })
          );
          setExpenses(fetchedExpenses);
          console.log("데이터를 받아왔습니다.");
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        console.log("데이터를 받아오지 못했습니다.");
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // 더미 데이터로 교체
    const dummyData = {
      memberId: 1,
      specificAmount: 400000,
      monthAmount: 300000,
      totalAmount: 300000,
      consumedList: [
        { consumedDate: "2024.06.01", amount: 15000 },
        { consumedDate: "2024.06.02", amount: 20000 },
        { consumedDate: "2024.06.03", amount: 10000 },
        { consumedDate: "2024.06.04", amount: 30000 },
        { consumedDate: "2024.06.05", amount: 25000 },
        { consumedDate: "2024.06.06", amount: 18000 },
        { consumedDate: "2024.06.07", amount: 22000 },
        { consumedDate: "2024.06.08", amount: 17000 },
        { consumedDate: "2024.06.09", amount: 13000 },
        { consumedDate: "2024.06.10", amount: 19000 },
        { consumedDate: "2024.06.11", amount: 21000 },
        { consumedDate: "2024.06.12", amount: 16000 },
      ],
    };

    const fetchedExpenses = dummyData.consumedList.map((item) => ({
      date: new Date(item.consumedDate),
      amount: item.amount,
    }));
    setExpenses(fetchedExpenses);
    console.log("더미 데이터를 사용합니다.");

    // fetchExpenses();
  }, [accessToken, month, endDate]);

  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        setErrorMessage(
          `Error: ${error.response.status} - ${error.response.data}`
        );
      }
    } else {
      console.error("Unexpected error:", error);
      setErrorMessage(`Unexpected error: ${error.message}`);
    }
  };

  const calculateTotalAmount = (start: string, end: string) => {
    const startDate = new Date(start.replace(/\./g, "-"));
    const endDate = new Date(
      new Date(end.replace(/\./g, "-")).getTime() + 24 * 60 * 60 * 1000
    ); // endDate에 하루 더하기
    return expenses
      .filter((exp) => exp.date >= startDate && exp.date < endDate)
      .reduce((acc, exp) => acc + exp.amount, 0);
  };

  const calculateMonthlyAmount = (month: string) => {
    const [year, monthStr] = month.split(".");
    const start = new Date(parseInt(year), parseInt(monthStr) - 1, 1);
    const end = new Date(parseInt(year), parseInt(monthStr), 0); // 해당 월의 마지막 날
    return calculateTotalAmount(
      start.toISOString().split("T")[0],
      end.toISOString().split("T")[0]
    );
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

  const renderDateRangeCalculation = (
    label: string,
    start: string,
    end: string,
    isDisabled: boolean = false
  ) => (
    <S.ExpenseCalculationItem>
      <label>
        <S.DateInput
          type="text"
          value={start}
          onChange={(e) => setStartDate(e.target.value)}
          disabled={isDisabled}
        />
        부터 &nbsp;
        <S.DateInput
          type="text"
          value={end}
          onChange={(e) => setEndDate(e.target.value)}
          disabled={isDisabled}
        />
        까지 {label}
      </label>
      <S.Amount>
        {calculateTotalAmount(start, end).toLocaleString()} 원
      </S.Amount>
    </S.ExpenseCalculationItem>
  );

  const renderMonthlyCalculation = (
    label: string,
    month: string,
    isDisabled: boolean = false
  ) => (
    <S.ExpenseCalculationItem>
      <label>
        <S.DateInput
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          disabled={isDisabled}
        />
        월 {label}
      </label>
      <S.Amount>{calculateMonthlyAmount(month).toLocaleString()} 원</S.Amount>
    </S.ExpenseCalculationItem>
  );

  return (
    <S.AccountBookContainer>
      <S.Title>가계부보기</S.Title>
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <S.StyledCalendar
        calendarType="gregory"
        value={value}
        tileContent={accountBookData}
      />
      <S.ExpenseCalculationContainer>
        <S.CalculationTitle>소비 금액 계산</S.CalculationTitle>
        <S.CalculationSubTitle>
          직접입력하여 기준일을 선택하세요
        </S.CalculationSubTitle>
        {renderDateRangeCalculation("총 소비 금액", startDate, endDate)}
        {renderMonthlyCalculation("소비 금액", month)}
      </S.ExpenseCalculationContainer>
    </S.AccountBookContainer>
  );
};

export default AccountBook;
