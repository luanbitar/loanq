import { useNavigate } from "react-router-dom";

import Redo from "icons/Redo";

function RedoButton() {
  const navigate = useNavigate();
  function onRedoClick() {
    navigate("/");
  }
  return (
    <div className="px-5 max-w-[300px] w-full flex justify-center">
      <button
        className="w-full bg-accent flex p-2 rounded-md justify-center mt-12"
        onClick={onRedoClick}
      >
        <div className="w-6 h-6">
          <Redo />
        </div>
        <span className="text-white">Redo</span>
      </button>
    </div>
  );
}

export default RedoButton;
