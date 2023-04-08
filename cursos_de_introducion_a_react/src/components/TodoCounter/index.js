import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../todoContext';

function TodoCounter() {
    const {totalTodos:total,completedTodos:completed} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>

    );
}

export {TodoCounter};