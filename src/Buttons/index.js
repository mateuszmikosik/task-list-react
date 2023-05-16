import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
  if (tasks.length === 0) {
    return null;
  } return (
    <>
      <button
        className={`buttons__button ${tasks.length === 0
          ? "buttons__button--hidden" : ""}`}
      >
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)} 
      >
        Ukończ wszystkie
      </button>
    </>
  )
};

export default Buttons;