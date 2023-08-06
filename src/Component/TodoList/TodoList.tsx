import Todo from "./Todo/Todo";

const TodoList = () => {

  const completedTodosStyle: React.CSSProperties = {
    borderTop: '2px dashed #5d5d5dde',
    paddingTop: '20px',
    marginTop: '20px'
  }
  return (
    <div>
      <Todo />
      <Todo />
      <div style={completedTodosStyle}>
        <Todo />
        <Todo />
      </div>
    </div>
  );
};

export default TodoList;
