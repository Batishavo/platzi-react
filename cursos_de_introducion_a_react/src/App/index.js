import React from "react";
import {AppUI} from "./AppUI";
import "../styles/App.css";
import { TodoProvider } from "../todoContext";

function App() {


  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
