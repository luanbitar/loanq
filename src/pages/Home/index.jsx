import Radio from "components/Radio";
import HomeIllustration from "icons/HomeIllustration";
import Amount from "./components/Amount";
import CalcButton from "./components/CalcButton";

function Home() {
  const [amount, setAmount] = React.useState("0");
  const [period, setPeriod] = React.useState("MONTHLY");
  const [incomeType, setIncomeType] = React.useState("GROSS");

  return (
    <div className="bg-white min-w-[100vw] min-h-[100vh] flex justify-center items-center flex-col sm:flex-row">
      <div className="flex sm:pr-5 mt-10 mb-5 max-w-[250px] max-h-[200px]">
        <HomeIllustration />
      </div>
      <div className="max-w-[400px] flex-1">
        <Amount
          amount={amount}
          setAmount={setAmount}
          period={period}
          setPeriod={setPeriod}
        />
        <div className="flex px-4">
          <Radio value={incomeType} onChange={setIncomeType} />
          <CalcButton state={{ amount, period, incomeType }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
