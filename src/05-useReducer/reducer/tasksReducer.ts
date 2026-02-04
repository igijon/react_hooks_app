import * as z from "zod";

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
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasksState");
  if (localStorageState) {

    //Validar mediante Zod
    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));
    if (result.success) {
      return result.data;
    } else {
      console.error("Invalid tasks state in localStorage:", result.error);
      localStorage.removeItem("tasksState");
    }
  }
  return {
    todos: [],
    length: 0,
    completed: 0,
    pending: 0,
  };
};

//Un reducer es una función que devuelve siempre un estado nuevo.
//Es una función pura que resuelve un nuevo estado basado en los argumentos
//El patrón Reducer es agnóstico, no depende de React, se podría implementar en cualquier tecnología
export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      //! No hacer esto, no hacer mutaciones al estado, siempre un nuevo estado
      //state.todos.push(newTodo);

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.length + 1,
        pending: state.pending + 1,
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        length: state.length - 1,
        completed: state.todos.find((todo) => todo.id === action.payload)
          ?.completed
          ? state.completed - 1
          : state.completed,
        pending: state.todos.find((todo) => todo.id === action.payload)
          ?.completed
          ? state.pending
          : state.pending - 1,
      };
    }
    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload,
      );
      const isCompleted = toggledTodo ? !toggledTodo.completed : false;

      return {
        ...state,
        todos: updatedTodos,
        completed: isCompleted ? state.completed + 1 : state.completed - 1,
        pending: isCompleted ? state.pending - 1 : state.pending + 1,
      };
    }
    default:
      return state;
  }
};
