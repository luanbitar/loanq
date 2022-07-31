import Radio from "components/Radio";
import HomeHeaderIcon from "icons/HomeHeaderIcon";
import HomeIllustration from "icons/HomeIllustration";
import Amount from "./components/Amount";
import CalcButton from "./components/CalcButton";

function Home() {
  const [amount, setAmount] = React.useState("");
  const [period, setPeriod] = React.useState("MONTHLY");
  const [incomeType, setIncomeType] = React.useState("GROSS");

  return (
    <div className="overflow-x-hidden">
      <div className="bg-white min-w-[100vw] min-h-[calc(100vh+200px)] sm:min-h-[100vh] flex justify-center items-center flex-col md:flex-row relative">
        <div className="absolute top-[-85px] w-[800px] md:top-[-320px] left-1/2 transform translate-x-[-50%] md:w-[2000px] m-auto">
          <HomeHeaderIcon />
        </div>
        <div className="flex sm:pr-5 mt-[137px] md:mt-0 mb-5 md:mb-[283px] max-w-[320px] md:max-w-[470px] max-h-[350px] z-10">
          <HomeIllustration />
        </div>
        <div className="max-w-[400px] flex-1 z-10">
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
    </div>
  );
}

export default Home;
