import { useLocation, useNavigate } from "react-router";

import Description from "./components/Description";
import PeriodsTabs from "./components/PeriodsTabs";
import RedoButton from "./components/RedoButton";
import ResultsBackground from "./components/ResultsBackground";
import ResultsTotal from "./components/ResultsTotal";

const TAX = 2.5;
const INVERTED_TAX_CALC = 100 - TAX;

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [period, setPeriod] = React.useState(state?.period);

  const amount = state?.amount;

  React.useEffect(() => {
    if (!state) return navigate("/");
  }, []);

  function calcTaxes() {
    if (state?.incomeType === "GROSS") {
      const totalTaxValue = (amount / 100) * TAX;
      const totalCalcIncome = amount - totalTaxValue;
      return {
        totalTaxValue,
        totalCalcIncome,
      };
    }

    const totalTaxValue = (amount / INVERTED_TAX_CALC) * TAX;
    const totalCalcIncome = amount + totalTaxValue;
    return {
      totalTaxValue,
      totalCalcIncome,
    };
  }

  const { totalTaxValue, totalCalcIncome } = calcTaxes();

  return (
    <div className="bg-accent min-w-[100vw] min-h-[100vh] flex justify-center items-center">
      <ResultsBackground />
      <div className="flex items-center justify-center w-full max-w-[1000px] m-auto flex-row relative px-4">
        <div className="bg-white w-full max-w-[500px] z-10 rounded-3xl flex flex-col items-center pb-8">
          <PeriodsTabs value={period} onChange={setPeriod} />

          <ResultsTotal
            incomeType={state?.incomeType}
            total={totalCalcIncome}
          />

          <Description
            TAX={TAX}
            totalTaxValue={totalTaxValue}
            incomeType={state.incomeType}
            amount={state.amount}
          />

          <RedoButton />
        </div>
      </div>
    </div>
  );
}

export default Results;
