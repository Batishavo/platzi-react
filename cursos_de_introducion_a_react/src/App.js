import React from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoList} from "./components/TodoList";
import {TodoSearch} from "./components/TodoSearch.js";
import {TodoItem} from "./components/TodoItem.js";
import {CreateTodoButtom} from "./components/TodoButtom";
import "./App.css";

const defaultTodos = [
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
  {
    text: "Aprender react",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => todo.completed).length;
  

  let searchdTodos = [];

  if (!searchValue.length >= 1) {
    searchdTodos = todos;
  } else {
    searchdTodos = todos.filter(todo =>{
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();
      alert('Ya completaste el todo ');
      return todoText.includes(searchText);
    })
  }

  const totalTodos = searchdTodos.length;

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };


  return (
    <React.Fragment>
      <div className="contenedor">
        <div className="principal">
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <TodoList>
            {searchdTodos.map(todo => (
              <TodoItem
                key={todos.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <div className="boton">
            <CreateTodoButtom />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
