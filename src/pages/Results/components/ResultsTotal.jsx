function ResultsTotal({ incomeType, total }) {
  return (
    <>
      <p className="text-spaceGray-300 text-center font-light text-sm pt-8 pb-1">
        {incomeType === "GROSS" ? "Net" : "Gross"} income
      </p>

      <h3 className="text-spaceGray-400 text-center font-semibold text-3xl">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
        }).format(total)}
      </h3>
    </>
  );
}

export default ResultsTotal;
