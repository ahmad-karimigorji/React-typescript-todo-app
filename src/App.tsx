import TodoForm from "./Component/TodoForm/TodoForm";
import TodoList from "./Component/TodoList/TodoList";

function App() {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "0 5px",
  };

  return (
    <div style={containerStyle}>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
