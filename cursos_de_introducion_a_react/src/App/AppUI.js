import React from "react";
import {TodoCounter} from "../components/TodoCounter";
import {TodoList} from "../components/TodoList";
import {TodoSearch} from "../components/TodoSearch/index.js";
import {TodoItem} from "../components/TodoItem/index.js";
import {CreateTodoButtom} from "../components/TodoButtom";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
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
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          <CreateTodoButtom />
        </div>
      </div>
    </React.Fragment>
  );
}
export {AppUI};
