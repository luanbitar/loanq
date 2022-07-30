import { useLocation, useNavigate } from "react-router";

const TAX = 2.5;
const INVERTED_TAX_CALC = 100 - TAX;

function Results(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const amount = location.state.amount;

  React.useEffect(() => {
    if (!location.state) return navigate("/");
  }, []);

  function calcTaxes() {
    if (location.state.incomeType === "GROSS") {
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

  console.log({ props, location });
  const { totalTaxValue, totalNetIncome } = calcTaxes();
  return (
    <div>
      <h1>results page</h1>

      <h3>amount: {amount}</h3>
      <h3>tax: {TAX}%</h3>
      <h3>total tax: {totalTaxValue}</h3>
      <h3>net: {totalNetIncome}</h3>
    </div>
  );
}

export default Results;
