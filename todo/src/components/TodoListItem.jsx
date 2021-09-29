import { useEffect } from "react";

const TodoListItem = (props) => {
  const todo = props.todo;
  const index = props.index;
  const { onDelete } = props;

  useEffect(() => {
    console.log("Ready TODO List Item");
  }, []);

  //   const {todo} = props

  // function handleDelete() {
  //   onDelete(todo);
  // }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          {index + 1}. {todo}{" "}
        </div>
        <div className="col-2">
          <img
            onClick={onDelete}
            className="hand"
            src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
            height="20px"
          />
        </div>
      </div>
    </li>
  );
};

export { TodoListItem };
