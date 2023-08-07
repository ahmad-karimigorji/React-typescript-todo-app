import PriorityComponent from "../PriorityComponent/PriorityComponent";
import { useState, useContext } from "react";
import { FormDataType } from "./type";
import { TodoContext } from "../../Context/TodoProvider";

const TodoForm = () => {
  const {addTodo} = useContext(TodoContext)
  const [formData, setFormData] = useState<FormDataType>({
    priority: 0,
    text: "",
  });

  const boxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };
  const textInputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px",
    outline: "none",
    background: "#242424",
    color: "rgba(255, 255, 255, 0.87)",
    border: "1px solid #5d5d5dde",
    borderRadius: "5px 0 0 5px",
    marginRight: "3px",
  };
  const buttonStyle: React.CSSProperties = {
    padding: "10px",
    borderRadius: "0 5px 5px 0",
    background: "#5F85DB",
    border: "1px solid #5F85DB",
    color: "rgba(255, 255, 255, 0.87)",
    cursor: 'pointer'
  };

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.text){
      addTodo(formData)
      setFormData({
        priority: 0,
        text: "",
      })
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "text") setFormData({ ...formData, [name]: value });
    else setFormData({ ...formData, [name]: +value });
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <div style={{ marginBottom: "3px" }}>
          <PriorityComponent
            onChange={handleChange}
            active={formData.priority == 0}
            value={0}
          />
          <PriorityComponent
            onChange={handleChange}
            active={formData.priority == 1}
            value={1}
          />
          <PriorityComponent
            onChange={handleChange}
            active={formData.priority == 2}
            value={2}
          />
          <PriorityComponent
            onChange={handleChange}
            active={formData.priority == 3}
            value={3}
          />
        </div>
        <div style={boxStyle}>
          <input
            style={textInputStyle}
            name="text"
            value={formData.text}
            onChange={handleChange}
            type="text"
          />
          <button style={buttonStyle} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
