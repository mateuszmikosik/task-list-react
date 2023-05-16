import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <>
        <li key={task.id}
          className={`tasks__task ${(task.done && hideDoneTasks) ? "tasks__task--hidden" : ""}`}>
          <button className={`tasks__button ${task.done ? "tasks__button--done" : ""}`}>
            &#10004;
          </button>
          <span className={`tasks__taskContent ${task.done ? "tasks__taskContent--done" : ""}> ${task.name}`}>
            {task.content}
          </span>
          <button className="tasks__button tasks__button--remove">
            &#128465;
          </button>
        </li>
      </>
    )
    )}

  </ul>
)

export default Tasks;
