import TodoForm from "./Component/TodoForm/TodoForm";
import TodoList from "./Component/TodoList/TodoList";
import TodoProvider from "./Context/TodoProvider";

function App() {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "0 5px",
  };

  return (
    <TodoProvider>
      <div style={containerStyle}>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
