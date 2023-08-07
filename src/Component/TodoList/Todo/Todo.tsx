import { GoTrash } from "react-icons/go";
import { TbCheck } from "react-icons/tb";
import { TodoProps } from "./type";
import { priorityColors } from "../../PriorityComponent/PriorityComponent";
import { useContext } from "react";
import { TodoContext } from "../../../Context/TodoProvider";

const Todo = ({ todo }: TodoProps) => {
  const { completedTodo, deleteTodo } = useContext(TodoContext);
  const todoStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#242424",
    padding: "5px",
    marginBottom: "5px",
    gap: "10px",
  };

  const textStyle: React.CSSProperties = {
    marginRight: "auto",
  };

  const checkIconStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "30px",
    height: "30px",
    borderRadius: "100%",
    border: `2px solid ${priorityColors[todo.priority]}`,
    color: "rgba(255, 255, 255, 0.87)",
    backgroundColor: "#26282B",
    cursor: "pointer",
  };

  const trashIconStyle: React.CSSProperties = {
    display: "flex",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "5px",
    border: "none",
    cursor: "pointer",
  };

  const handleCheck = () => {
    completedTodo({ id: todo.id, completed: todo.completed });
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div style={todoStyle}>
      <button style={checkIconStyle} onClick={handleCheck}>
        {todo.completed && <TbCheck />}
      </button>
      <p style={textStyle}>{todo.text}</p>
      <button style={trashIconStyle} onClick={handleDelete}>
        <GoTrash />
      </button>
    </div>
  );
};

export default Todo;
