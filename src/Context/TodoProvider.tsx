import React from "react";
import { reducer } from "./reducer";
import { Todo, TodoContextType, TodoProviderProps, TodosState } from "./type";

const getLocal: Todo[] = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos") as string)
  : [];

const initialState: TodosState = {
  todos: getLocal,
};

export const TodoContext = React.createContext({} as TodoContextType);

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value: TodoContextType = {
    todos: state.todos,
    addTodo: (todo) => dispatch({ type: "create", payload: todo }),
    deleteTodo: (id) => dispatch({ type: "delete", payload: id }),
    completedTodo: (todo) => dispatch({ type: "completed", payload: todo }),
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
