import react from "react";
import "./TodoButtom.css";
function CreateTodoButtom(props) {

  const onClickButton = (msg)=>{
    alert(msg)
  };

  return (
    <button 
      className="mainButon"
      onClick={()=>onClickButton('prueba')}>
        +
    </button>
  );
}

export {CreateTodoButtom};
