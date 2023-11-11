import "./app.css";
import Form from "./components/Form/from";
import MainHeader from "./components/Header/header";
import TaskCard from "./components/taskCard/taskCard";
import { useState } from "react";
import { useStore } from "./store";

const App = () => {
  // const [todos, setTodos] = useState([{ id: 1, todo: "First Task" }]);
  const { todos, setTodos } = useStore();

  const handleDelete = (todo) => {
    setTodos(todos.filter((el) => el.todo !== todo));
  };

  return (
    <div>
      <MainHeader />
      <main className="container home">
        <h1 className="title">Simple ToDo App</h1>
        <p className="desc">This todo app for test design.</p>
        <Form />
        <div className="todo-list">
          {todos.map((el) => {
            return (
              <TaskCard
                text={el.todo}
                handleDelete={() => handleDelete(el.todo)}
              />
            );
          })}
        </div>
        <button className="fixed-btn">+ Add New</button>
      </main>
    </div>
  );
};

export default App;
