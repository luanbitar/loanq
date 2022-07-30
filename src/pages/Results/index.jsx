import ResultsIllustration from "icons/ResultsIllustration";
import { useLocation, useNavigate } from "react-router";

const TAX = 2.5;
const INVERTED_TAX_CALC = 100 - TAX;

function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const amount = location?.state?.amount;

  React.useEffect(() => {
    if (!location.state) return navigate("/");
  }, []);

  function calcTaxes() {
    if (location?.state?.incomeType === "GROSS") {
      const totalTaxValue = (amount / 100) * TAX;
      const totalNetIncome = amount - totalTaxValue;
      return {
        totalTaxValue,
        totalNetIncome,
      };
    }

    const totalTaxValue = (amount / INVERTED_TAX_CALC) * TAX;
    const totalNetIncome = amount + totalTaxValue;
    return {
      totalTaxValue,
      totalNetIncome,
    };
  }

  const { totalTaxValue, totalNetIncome } = calcTaxes();
  return (
    <div className="bg-accent min-w-[100vw] min-h-[100vh] flex align-start md:align-center item-center">
      <div className="flex items-center justify-start md:justify-center w-full md:max-w-[1000px] md:m-auto flex-col md:flex-row">
        <div className="max-w-[300px] h-[300px] max-h-[300px] flex-1">
          <ResultsIllustration />
        </div>

        <div className="bg-white h-[200px] w-full max-w-[500px]"></div>
      </div>
    </div>
  );
}

export default Results;
