import react from "react";
import "../styles/TodoSearch.css"

function TodoSearch(){

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
    };

    return(
        <input 
            placeholder ="Pendientes" 
            className="searchInput" 
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};