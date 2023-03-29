import react from "react";
import "../styles/TodoSearch.css"

function TodoSearch(){
    return(
        <input 
            placeholder ="Pendientes" 
            className="searchInput" 
        />
    );
}

export {TodoSearch};