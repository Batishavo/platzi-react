import React from "react";
import "./TodoItem.css"

function TodoItem(props){

    return(
        <li className={`todoItem ${props.completed && 'todoItem--completed'}`}>
            <span 
                className="buton ✓Buttom"
                onClick={props.onComplete}>
                    ✓
            </span>
            <p>{props.text}</p>
            <span 
                className="buton xButom"
                onClick={props.onDelete}
                >
                    X
            </span>
        </li>
    );
}

export { TodoItem };