import { GoTrash } from "react-icons/go";
import { TbCheck } from "react-icons/tb";

const Todo = () => {
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
    border: "2px solid red",
    color: "rgba(255, 255, 255, 0.87)",
    backgroundColor: "#26282B",
    cursor: 'pointer'
  };

  const trashIconStyle: React.CSSProperties = {
    display: "flex",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "5px",
    border: "none",
    cursor: 'pointer'
  };

  return (
    <div style={todoStyle}>
      <button style={checkIconStyle}>
        <TbCheck />
      </button>
      <p style={textStyle}>
        text
      </p>
      <button style={trashIconStyle}>
        <GoTrash />
      </button>
    </div>
  );
};

export default Todo;
