function Description({ totalTaxValue, incomeType, amount, TAX }) {
  return (
    <div className="max-w-[300px] w-full px-5 pt-8">
      <div className="border-b-2 border-dashed pb-6 border-black/10">
        <p className="font-semibold text-spaceGray-400 pb-2">Description:</p>

        <div className="flex justify-between pb-4">
          <p className="text-spaceGray-300 font-light">Tax</p>
          <p className="text-spaceGray-300 font-light">{TAX}%</p>
        </div>

        <div className="flex justify-between pb-4">
          <p className="text-spaceGray-300 font-light">Total Taxes</p>
          <p className="text-spaceGray-300 font-light">
            {new Intl.NumberFormat("en-US", {
              currency: "USD",
              style: "currency",
            }).format(totalTaxValue)}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-spaceGray-300 font-light">
            {incomeType === "GROSS" ? "Gross" : "Net"} Income
          </p>
          <p className="text-spaceGray-300 font-light">
            {new Intl.NumberFormat("en-US", {
              currency: "USD",
              style: "currency",
            }).format(amount)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
