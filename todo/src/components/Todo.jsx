import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT ON TODO CHANGE");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log("USE EFFECT FIRST TIME");
    const stringTodos = localStorage.getItem("todos");
    if (stringTodos) {
      const todos = JSON.parse(stringTodos);
      setTodos(todos);
    }
  }, []);

  const handleDelete = (todo) => {
    const copy = [...todos];
    const index = copy.findIndex((el) => el === todo);
    copy.splice(index, 1);
    setTodos(copy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = event.target.elements["todoInput"];
    // const form = event.target;
    // const elements = form.elements;
    // const input = elements["todoInput"];
    // const value = input.value;

    setTodos([...todos, input.value]);
    input.value = "";
  };
  return (
    <div className="border  shadow p-3">
      <h1>Todo Application</h1>
      <form onSubmit={handleSubmit} className="col-6 m-4">
        <input name="todoInput" type="text" className="form-control" />
        <button className="btn btn-light mt-4" type="submit">
          Add Todo
        </button>
      </form>
      <hr />
      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={handleDelete} />
      ) : (
        <h1 className="alert alert-info">No Todos</h1>
      )}
    </div>
  );
};

export default Todo;
