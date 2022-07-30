import Arrow from "icons/Arrow";

function Select({ options, value, onChange }) {
  const [isShowingOptions, setIsShowingOptions] = React.useState(false);
  const currentValueIndex = options.findIndex(
    (option) => option.value === value
  );

  return (
    <div
      className="appearance-none bg-emerald-400 text-white text-center px-6 rounded-r-full focus:outline-none relative items-center flex cursor-pointer"
      onClick={() => setIsShowingOptions(!isShowingOptions)}
    >
      <span className="flex items-center">
        {options[currentValueIndex].label}

        <span className="ml-2">
          <Arrow />
        </span>
      </span>
      <div className="absolute top-[calc(100%+5px)] left-0 bg-emerald-400 rounded-md shadow-lg overflow-hidden">
        {isShowingOptions &&
          options.map((option) => (
            <span
              key={option.label}
              className="border-none p-4 hover:bg-emerald-500/40 block"
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </span>
          ))}
      </div>
    </div>
  );
}

export default Select;
