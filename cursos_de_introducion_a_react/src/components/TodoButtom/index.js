import React from "react";
import "./TodoButtom.css";
function CreateTodoButtom(props) {

  function onClickButton(){
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button 
      className="mainButon"
      onClick={onClickButton}
    >
        +
    </button>
  );
}

export {CreateTodoButtom};
