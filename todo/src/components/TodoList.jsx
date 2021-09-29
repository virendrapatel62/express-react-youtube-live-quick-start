import { useEffect } from "react";
import { TodoListItem } from "./TodoListItem";

const TodoList = (props) => {
  const todos = props.todos;
  const { onDelete } = props;

  useEffect(() => {
    console.log("Ready TODO List");
  }, []);

  return (
    <ol className="border-w list-group">
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            onDelete={() => onDelete(todo)}
            todo={todo}
            index={index}
            key={index}
          />
        );
      })}
    </ol>
  );
};

export { TodoList };
