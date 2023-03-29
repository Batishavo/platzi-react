import react from "react";
import "../styles/TodoItem.css"

function TodoItem(props){

    const onComplete = ()=>{
        alert('Ya completaste el todo '+props.text);
    }

    const onDelete = ()=>{
        alert('Borraste el todo '+props.text);
        console.log(props.completed && "todoItem--completed");
    }

    return(
        <li className={`todoItem ${props.completed && 'todoItem--completed'}`}>
            <span 
                className="buton ✓Buttom"
                onClick={()=>onComplete()}>
                    ✓
            </span>
            <p>{props.text}</p>
            <span 
                className="buton xButom"
                onClick={()=>onDelete()}
                >
                    X
            </span>
        </li>
    );
}

export { TodoItem };