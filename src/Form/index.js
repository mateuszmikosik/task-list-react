import "./style.css";

const Form = () => (
  <form className="form">
    <input type="text" className="form__newTaskInput" placeholder="Co jest do zrobienia?" />
    <button className="form__addTaskButton"> Dodaj zadanie </button>
  </form>)

export default Form;