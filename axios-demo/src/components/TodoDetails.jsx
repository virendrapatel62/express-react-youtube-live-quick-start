import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getTodo } from "../services/todo";

function TodoDetails(props) {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    console.log("Getting Data....");

    getTodo(id).then((todo) => {
      setTodo(todo);
    });
  }, []);

  return (
    <div>
      <h1>Todo Details Page</h1>
      <hr />

      {todo ? (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{todo.title}</h4>
          </div>
        </div>
      ) : (
        <p className="alert alert-info">Loading.....</p>
      )}
    </div>
  );
}

export { TodoDetails };
