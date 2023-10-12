import { PayloadAction } from "@reduxjs/toolkit";
import { IinitialState, todoItem } from "./initialState";
import { v4 as uuidv4 } from "uuid";

const changeTodoStatusById = (
  state: IinitialState,
  action: PayloadAction<string>
) => {
  const id = action.payload;
  state.todo.forEach((todo) => {
    if (todo.id === id) {
      todo.status = todo.status === "DONE" ? "PENDING" : "DONE";
    }
  });
};

const addTodo = (state: IinitialState, action: PayloadAction<string>) => {
  const todo = action.payload;
  const newTodo: todoItem = {
    id: uuidv4(),
    status: "PENDING",
    task: todo,
  };
  state.todo.unshift(newTodo);
};

export { changeTodoStatusById, addTodo };
