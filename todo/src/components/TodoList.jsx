import { TodoListItem } from "./TodoListItem";

const TodoList = (props) => {
  const todos = props.todos;
  return (
    <ol>
      {todos.map((todo, index) => {
        return <TodoListItem todo={todo} key={index} />;
      })}
    </ol>
  );
};

export { TodoList };
