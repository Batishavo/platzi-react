
//import './App.css';

const todos=[
  {
    text:'Cortar cebolla',
    completed:false,
  },
  {
    text:'lloarar',
    completed:false,
  },
  {
    text:'Cortarme el cabello',
    completed:false,
  }

];

function App() {
  return (
    <TodoCounter />

    <h2>Has completado 2 de 3 TODOs</h2>
    
    <TodoSearch />
   
    <input placeholder="Cebolla"/>
   
   <TodoList>
      {todos.map(todo =>{
        <TodoItem />
      })}
    </TodoList>
   
   <CreateTodoButton />
   <button></button>
   <button>+</button>

  );
}

export default App;
