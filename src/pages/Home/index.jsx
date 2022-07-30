import { useNavigate } from "react-router";
import Amount from "./components/Amount";

function Home() {
  const [amount, setAmount] = React.useState(0);
  const [period, setPeriod] = React.useState("MONTHLY");
  const [incomeType, setIncomeType] = React.useState("GROSS");
  const navigate = useNavigate();

  function onCalcClick() {
    const amountInteger = +amount.replace(/,/g, "");

    navigate("/results", {
      state: { amount: amountInteger, period, incomeType },
    });
  }

  return (
    <div className="bg-emerald-50 min-w-[100vw] min-h-[100vh] flex justify-center items-center">
      <div className="max-w-[400px] flex-1">
        <Amount
          amount={amount}
          setAmount={setAmount}
          period={period}
          setPeriod={setPeriod}
        />
        <button onClick={() => setIncomeType("GROSS")}>gross</button>
        <button onClick={() => setIncomeType("NET")}>net</button>
        <button onClick={onCalcClick}>calc</button>
      </div>
    </div>
  );
}

export default Home;
