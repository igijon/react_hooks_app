interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: Todo}
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

//Un reducer es una función que devuelve siempre un estado nuevo.
//Es una función pura que resuelve un nuevo estado basado en los argumentos
export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  return state;
};
