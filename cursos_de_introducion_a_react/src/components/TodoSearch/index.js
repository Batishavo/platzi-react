import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../../todoContext";

function TodoSearch(){
    const {searchValue,setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) =>{
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
            placeholder ="Pendientes" 
            className="searchInput" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};