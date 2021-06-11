import React from "react";
import "./App.css";

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="add new todo"
      />
    </form>
  );
}
function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React",isComplete:false },
    { text: "Meet friend for lunch",isComplete:false },
    { text: "Build really cool todo app",isComplete:false }
  ]);
const addTodo=text=>{
  const newTodos=[...todos,{text}];
  setTodos(newTodos);
}
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;