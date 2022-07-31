import Input from "components/Input";
import Select from "components/Select";
import periods from "constants/periods";

function Amount({ amount, setAmount, period, setPeriod }) {
  function onAmountChange(e) {
    const eventValue = e.target.value;
    const integerValue = +eventValue.replace(/,/g, "");
    const isOutsideOfRange = integerValue > 99999999 || integerValue < 0;
    const hasTooManyDecimalPlaces = !/^\d*(\.\d{0,2})?$/.test(
      integerValue.toString()
    );

    if (isOutsideOfRange || hasTooManyDecimalPlaces) return;

    const endsWithDot = eventValue.endsWith(".") ? "." : "";
    const newAmount =
      new Intl.NumberFormat("en-US", { currency: "USD" }).format(integerValue) +
      endsWithDot;
    setAmount(newAmount);
  }

  return (
    <div className="px-4 pb-7 flex-1">
      <p className="text-accent text-center pt-4 pb-2">
        What is your total income?
      </p>
      <div className="mt-2 flex shadow-md rounded-full">
        <Input
          symbol="$"
          value={amount}
          type="tel"
          inputMode="decimal"
          onChange={onAmountChange}
        />
        <Select options={periods} value={period} onChange={setPeriod} />
      </div>
    </div>
  );
}

export default Amount;
