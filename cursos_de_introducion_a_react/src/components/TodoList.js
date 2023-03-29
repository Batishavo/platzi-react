import react from "react";
import "../styles/TodoList.css"

function TodoList(props){
    return(
        <section className="todoList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};