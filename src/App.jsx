import "./app.css";
import MainHeader from "./components/Header/header";
import TaskCard from "./components/taskCard/taskCard";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, todo: "First Task" }]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    let newObj = {
      id: 10,
      todo: newTodo,
    };

    let newList = [...todos, newObj];
    setTodos(newList);
    setNewTodo("");
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((el) => el.todo !== todo));
  };

  return (
    <div>
      <MainHeader />
      <main className="container home">
        <h1 className="title">Simple ToDo App</h1>
        <p className="desc">This todo app for test design.</p>

        <div className="form-box">
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Write Text here . . ."
          />
          <button onClick={handleAdd}>+ Add New</button>
        </div>

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
