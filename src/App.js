import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {

  const tasks = [
    { id: 1, content: "przejsc na react", done: true },
    { id: 2, content: "stworzyc repozytorium", done: true },
  ];

  const hideDoneTasks = false;

  return (
    <>
      <Container>
        <Header
          title="Lista zadań"
        />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />

        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraSectionButtons={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />

      </Container>
    </>
  );
}

export default App;

