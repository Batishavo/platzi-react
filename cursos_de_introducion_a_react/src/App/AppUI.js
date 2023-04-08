import React from "react";
import {TodoContext} from "../todoContext";
import {TodoSearch} from "../components/TodoSearch";
import {TodoList} from "../components/TodoList";
import {TodoItem} from "../components/TodoItem";
import {CreateTodoButtom} from "../components/TodoButtom";
import {TodoCounter} from "../components/TodoCounter";

function AppUI() {
  const {error, loading, searchedTodos, completeTodo, deleteTodo} =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <div className="contenedor">
        <div className="principal">
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

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
