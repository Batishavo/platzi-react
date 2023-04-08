import ReactDOM from "react-dom";

function modal({children}) {
  return ReactDOM.createPortal(
    children,
    document.getElementById("modal")
  );
}

export {modal};
