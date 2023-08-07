import { Todo, TodoActions, TodosState } from "./type";

const saveLocal = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const reducer: React.Reducer<TodosState, TodoActions> = (
  state,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "create": {
      const newTodos = [
        ...state.todos,
        { ...payload, id: new Date().getTime(), completed: false },
      ];
      saveLocal(newTodos);
      return {
        todos: newTodos,
      };
    }
    case "delete": {
      const filteredTodos = state.todos.filter((todo) => todo.id !== payload);
      saveLocal(filteredTodos);
      return { todos: filteredTodos };
    }
    case "completed": {
      const copyOfState = [...state.todos];
      const index = copyOfState.findIndex((todo) => todo.id === payload.id);
      copyOfState[index].completed = !payload.completed;
      saveLocal(copyOfState);
      return { todos: copyOfState };
    }

    default:
      return state;
  }
};
