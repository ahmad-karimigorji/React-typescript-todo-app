import { TodoActions, TodosState } from "./type";

export const reducer: React.Reducer<TodosState, TodoActions> = (
  state,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "create": {
      return {
        todos: [
          ...state.todos,
          { ...payload, id: new Date().getTime(), completed: false },
        ],
      };
    }
    case "delete": {
      const filteredTodos = state.todos.filter((todo) => todo.id !== payload);
      return { todos: filteredTodos };
    }
    case "completed": {
      const copyOfState = [...state.todos];
      const index = copyOfState.findIndex((todo) => todo.id === payload.id);
      copyOfState[index].completed = !payload.completed;
      return { todos: copyOfState };
    }

    default:
      return state;
  }
};
