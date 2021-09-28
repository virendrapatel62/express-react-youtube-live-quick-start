import { useState } from "react";
import { TodoList } from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    const input = elements["todoInput"];
    const value = input.value;

    setTodos([...todos, value]);
    input.value = "";
    console.log("You Clicked on HEading");
  };
  return (
    <div>
      <h1>Todo Application</h1>
      <form onSubmit={handleSubmit}>
        <input name="todoInput" type="text" />
        <button type="submit">Add Todo</button>
      </form>
      <hr />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
