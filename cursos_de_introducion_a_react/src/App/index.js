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

function useLocalStorage(itemname, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemname);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemname, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }, 1000);
    } catch (e) {
      setError(e);
    }
  });

  const saveItem = newItem => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemname, stringifiedItem);
      setItem(newItem);
    } catch (e) {
      setError(e);
    }
  };
  return {
    item, 
    saveItem, 
    loading,
    error
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => todo.completed).length;
  let searchdTodos = [];
  const totalTodos = searchdTodos.length;

  if (!searchValue.length >= 1) {
    searchdTodos = todos;
  } else {
    searchdTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();
      // alert("Ya completaste el todo ");
      return todoText.includes(searchText);
    });
  }

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

  //console.log("Render (antes de use efect)");

  // React.useEffect(() => {
  //   console.log("use effect");
  // }, [totalTodos]);

  //console.log("Render (despues del use efect)");

  return (
    <AppUI
      error={error}
      loading={loading}
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
