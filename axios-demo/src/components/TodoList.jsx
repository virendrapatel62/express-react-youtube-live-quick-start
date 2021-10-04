import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTodos } from "../services/todo";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(transformTodos(todos));
    });
  }, []);

  const transformTodos = (todos) =>
    todos.map((todo) => {
      return {
        ...todo,
        completed: todo.completed ? "✅" : "⌛",
      };
    });

  const handleClick = (todo) => {
    history.push(`/todos/${todo.id}`);
  };

  if (!todos.length) {
    return <p className="alert alert-info">Loading...</p>;
  }

  return (
    <div>
      <hr />
      <div className=" mx-auto">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>Todo Id</th>
              <th>Title</th>
              <th>User</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr onClick={() => handleClick(todo)} key={todo.id}>
                <td>{todo.id}</td>
                <td className="hand">{todo.title}</td>
                <td>{todo.userId}</td>
                <td>{todo.completed + ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { TodoList };
