import { PriorityType } from "../Component/PriorityComponent/type";

export type Todo = {
  id: number;
  text: string;
  priority: PriorityType;
  completed: boolean;
};

export type TodosState = {
  todos: Todo[];
};

export type TodoProviderProps = {
  children: React.ReactNode;
};

export type CreateAction = {
  type: "create";
  payload: Omit<Todo, "id" | "completed">;
};

export type DeleteAction = {
  type: "delete";
  payload: number;
};

export type CompletedAction = {
  type: "completed";
  payload: Omit<Todo, "text" | "priority">;
};

export type TodoActions = CreateAction | DeleteAction | CompletedAction;

export type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id" | "completed">) => void;
  deleteTodo: (id: number) => void;
  completedTodo: (todo: Omit<Todo, "text" | "priority">) => void;
};
