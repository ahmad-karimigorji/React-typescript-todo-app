import { useContext, useMemo } from "react";
import Todo from "./Todo/Todo";
import { TodoContext } from "../../Context/TodoProvider";
import { Todo as TodoType } from "../../Context/type";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  const completedTodosStyle: React.CSSProperties = {
    borderTop: "2px dashed #5d5d5dde",
    paddingTop: "20px",
    marginTop: "20px",
  };

  const sortTodos = (isCompleted: boolean) => {
    
    let result: TodoType[] = [];
    result = todos.sort((a, b) => b.id - a.id);
    result = result.sort((a, b) => b.priority - a.priority);
    result = result.filter((todo: TodoType) =>
      isCompleted ? todo.completed : !todo.completed
    );
    return result;
  };

  const completedTodos = useMemo(() => {
    return sortTodos(true);
  }, [todos]);

  const uncompletedTodos = useMemo(() => {
    return sortTodos(false);
  }, [todos]);

  return (
    <div style={{padding: '0 5px'}}>
      {uncompletedTodos.map((item) => (
        <Todo key={item.id} todo={item} />
      ))}
      {completedTodos.length > 0 && (
        <div style={completedTodosStyle}>
          {completedTodos.map((item) => (
            <Todo key={item.id} todo={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
