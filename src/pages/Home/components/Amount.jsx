import Input from "components/Input";
import Select from "components/Select";

const periodOptions = [
  { label: "Weekly", value: "WEEKLY" },
  { label: "Fortnightly", value: "FORTNIGHTLY" },
  { label: "Monthly", value: "MONTHLY" },
  { label: "Annually", value: "ANNUALLY" },
];

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
    const newAmount = integerValue.toLocaleString() + endsWithDot;
    setAmount(newAmount);
  }

  return (
    <div className="px-8 pt-6 pb-10 flex-1 ">
      <p className="text-gray-600 text-center pt-4 pb-2">
        What is your total income?
      </p>
      <div className="mt-2 flex shadow-md rounded-full">
        <Input symbol="$" value={amount} onChange={onAmountChange} />
        <Select options={periodOptions} value={period} onChange={setPeriod} />
      </div>
    </div>
  );
}

export default Amount;
