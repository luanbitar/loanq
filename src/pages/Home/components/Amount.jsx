import Input from "components/Input";
import Select from "components/Select";

const periodOptions = [
  { label: "Weekly", value: "WEEKLY" },
  { label: "Fortnightly", value: "FORTNIGHTLY" },
  { label: "Monthly", value: "MONTHLY" },
  { label: "Annually", value: "ANNUALLY" },
];

function Amount({ amount, setAmount, period, setPeriod }) {
  //   function onAmountChange(e) {
  //     const eventValue = e.target.value;
  //     const integerValue = +eventValue.replace(/,/g, "");
  //     const isOutsideOfRange = integerValue > 99999999 || integerValue < 0;
  //     const hasTooManyDecimalPlaces = !/^\d*(\.\d{0,2})?$/.test(
  //       integerValue.toString()
  //     );
  //     if (isOutsideOfRange || hasTooManyDecimalPlaces) return;

  //     const endsWithDot = eventValue.endsWith(".") ? "." : "";
  //     const newAmount = integerValue.toLocaleString() + endsWithDot;
  //     setAmount(newAmount);
  //   }

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
          inputmode="numeric"
          pattern="[0-9]*"
          //   onChange={onAmountChange}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) event.preventDefault();
          }}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Select options={periodOptions} value={period} onChange={setPeriod} />
      </div>
    </div>
  );
}

export default Amount;
