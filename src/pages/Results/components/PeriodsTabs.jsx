import periods from "constants/periods";

function PeriodsTabs({ value, onChange }) {
  return (
    <ul className="flex justify-center pt-3">
      {periods.map((currentPeriod) => {
        const activeStyle =
          value === currentPeriod.value
            ? "text-secondary border-b-[3px] border-accent font-medium"
            : "font-light text-accent";
        return (
          <li
            className="select-none pb-1 pt-2 cursor-pointer px-3"
            key={currentPeriod.value}
            onClick={() => onChange(currentPeriod.value)}
          >
            <span
              className={`pb-1 transition ease-in-out duration-200 ${activeStyle}`}
            >
              {currentPeriod.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default PeriodsTabs;
