import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoList} from "./TodoList";
import { TodoSearch } from "./TodoSearch.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./TodoButtom";
//import './App.css';

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
      <TodoCounter />    
      
      <TodoSearch />
      
      <TodoList>
        {
          todos.map(
            todo =>(
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
              />
            )
          )
        }
      </TodoList>
      
      <CreateTodoButtom />      
   
    </React.Fragment>
  );
}

export default App;
