function Input({ label, symbol, viewValue, ...props }) {
  return (
    <label className="text-emerald-400 w-full">
      {label}
      <div className="relative text-xl">
        <input
          className="w-full pl-10 pr-5 py-3 bg-white border border-white rounded-l-full transition ease-in-out focus:border-emerald-400 focus:outline-none appearance-none"
          {...props}
        />

        <span className="absolute left-7 top-1/2 translate-x-[-50%] translate-y-[-50%] select-none text-emerald-400">
          {symbol}
        </span>
      </div>
    </label>
  );
}

export default Input;
