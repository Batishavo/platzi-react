import React from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoList} from "./components/TodoList";
import {TodoSearch} from "./components/TodoSearch.js";
import {TodoItem} from "./components/TodoItem.js";
import {CreateTodoButtom} from "./components/TodoButtom";
import "./App.css";

const todos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "lloarar",
    completed: false,
  },
  {
    text: "Cortarme el cabello",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <div className="contenedor">
        <div className="principal">
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} />
            ))}
          </TodoList>
          <div className="boton">
            <CreateTodoButtom  />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
