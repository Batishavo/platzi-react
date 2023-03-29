import react from "react";
import "../styles/TodoItem.css"

function TodoItem(props){
    return(
        <li className="todoItem">
            <span className="buton ✓Buttom">✓</span>
            <p>{props.text}</p>
            <span className="buton xButom">X</span>
        </li>
    );
}

export { TodoItem };