function Radio({ value, onChange }) {
  const sharedStyle = "flex-1 py-3 transition ease-in-out duration-300";

  function getActiveClasses(incomeType) {
    if (value !== incomeType) return "bg-white text-accent";

    return "bg-accent text-white";
  }
  return (
    <div className="shadow-md rounded-full flex-1 flex">
      <button
        className={`rounded-l-full ${sharedStyle} ${getActiveClasses("GROSS")}`}
        onClick={() => onChange("GROSS")}
      >
        gross
      </button>
      <button
        className={`rounded-r-full ${sharedStyle} ${getActiveClasses("NET")}`}
        onClick={() => onChange("NET")}
      >
        net
      </button>
    </div>
  );
}

export default Radio;
