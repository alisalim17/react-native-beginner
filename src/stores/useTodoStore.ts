import create from "zustand";
import { combine } from "zustand/middleware";
import uuid from "react-native-uuid";
import { ITodo } from "../components/TodoWrapper";

export const useTodoStore = create(
  combine(
    {
      todos: [
        { id: uuid.v4(), text: "i am todo 1" },
        { id: uuid.v4(), text: "i am todo 2" },
        { id: uuid.v4(), text: "i am todo 3" },
        { id: uuid.v4(), text: "i am todo 4" },
        { id: uuid.v4(), text: "i am todo 5" },
      ] as ITodo[],
    },
    (set) => ({
      addTodo: (todo: ITodo) => {
        const oldTodos = useTodoStore.getState().todos;
        return set({ todos: [...oldTodos, todo] });
      },
      removeTodo: (todoId: string) => {
        const newTodos = useTodoStore
          .getState()
          .todos.filter(({ id }) => id !== todoId);
        return set({ todos: newTodos });
      },
    })
  )
);
