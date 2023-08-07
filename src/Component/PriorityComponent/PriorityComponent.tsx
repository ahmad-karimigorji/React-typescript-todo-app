import { BsFillFlagFill } from "react-icons/bs";
import { PriorityComponentProps } from "./type";

export const priorityColors: string[] = [
  "rgb(124, 124, 124)",
  "rgb(51, 116, 222)",
  "rgb(219, 111, 39)",
  "rgb(224, 60, 60)",
];

const PriorityComponent = ({
  value,
  active,
  ...rest
}: PriorityComponentProps) => {
  

  const labelStyle: React.CSSProperties = {
    marginLeft: "5px",
    cursor: "pointer",
    filter: active ? "brightness(1)" : "brightness(0.65)",
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        {...rest}
        type="radio"
        name="priority"
        id={`priority-${value}`}
        value={value}
      />
      <label style={labelStyle} htmlFor={`priority-${value}`}>
        <BsFillFlagFill style={{ color: priorityColors[value] }} />
      </label>
    </>
  );
};

export default PriorityComponent;
