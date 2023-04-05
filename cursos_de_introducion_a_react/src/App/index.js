import React from "react";
import {AppUI} from "./AppUI";
import "../styles/App.css";

// const defaultTodos = [
//   {
//     text: "Cortar cebolla",
//     completed: false,
//   },
//   {
//     text: "lloarar",
//     completed: false,
//   },
//   {
//     text: "Cortarme el cabello",
//     completed: false,
//   },
//   {
//     text: "Aprender react",
//     completed: true,
//   },
//];

function useLocalStorage(itemname,initialValue) {
  let parsedItem;
  const localStorageItem = localStorage.getItem(itemname);
  
  
  if (!localStorageItem) {
    localStorage.setItem(itemname, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = newItem => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemname, stringifiedItem);
    setItem(newItem);
  };
  return [
    item,
    saveItem,
  ];
}

function App() {

  const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => todo.completed).length;

  let searchdTodos = [];

  if (!searchValue.length >= 1) {
    searchdTodos = todos;
  } else {
    searchdTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();
      alert("Ya completaste el todo ");
      return todoText.includes(searchText);
    });
  }

  const totalTodos = searchdTodos.length;

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchdTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
