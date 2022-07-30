import Arrow from "icons/Arrow";

function Select({ options, value, onChange }) {
  const [isShowingOptions, setIsShowingOptions] = React.useState(false);
  const currentValueIndex = options.findIndex(
    (option) => option.value === value
  );

  return (
    <div
      className="appearance-none bg-accent text-white text-center px-6 rounded-r-full focus:outline-none relative items-center flex cursor-pointer select-none hover:bg-secondary"
      onClick={() => setIsShowingOptions(!isShowingOptions)}
    >
      <span className="flex items-center">
        {options[currentValueIndex].label}

        <span className="ml-2">
          <Arrow />
        </span>
      </span>
      <div className="absolute top-[calc(100%+5px)] left-0 bg-accent rounded-md shadow-lg overflow-hidden">
        {isShowingOptions &&
          options.map((option) => (
            <span
              key={option.label}
              className="border-none p-4 hover:bg-secondary block"
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
