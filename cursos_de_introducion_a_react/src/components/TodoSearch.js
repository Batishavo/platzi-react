import React from "react";
import "../styles/TodoSearch.css"

function TodoSearch({searchValue,setSearchValue}){
    
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
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