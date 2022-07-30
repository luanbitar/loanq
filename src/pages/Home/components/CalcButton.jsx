import { useNavigate } from "react-router";

function CalcButton({ state }) {
  const navigate = useNavigate();

  function onCalcClick() {
    const amount = +state.amount.replace(/,/g, "");

    navigate("/results", {
      state: { ...state, amount },
    });
  }

  return (
    <button
      className="bg-accent text-white rounded-full px-10 sm:px-16 py-3 ml-4 shadow-md"
      onClick={onCalcClick}
    >
      do it!
    </button>
  );
}

export default CalcButton;
