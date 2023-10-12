import { PayloadAction } from "@reduxjs/toolkit";
import { IinitialState, todoItem } from "./initialState";
import { v4 as uuidv4 } from "uuid";

const changeTodoStatusById = (
  state: IinitialState,
  action: PayloadAction<{ id: string; todoDate: string }>
) => {
  const { id, todoDate } = action.payload;
  const todoList = state.todoByDate[todoDate];
  todoList.forEach((todo) => {
    if (todo.id === id) {
      todo.status = todo.status === "DONE" ? "PENDING" : "DONE";
    }
  });
};

const addTodo = (
  state: IinitialState,
  action: PayloadAction<{ todo: string; dateString: string }>
) => {
  const { todo, dateString } = action.payload;
  const newTodo: todoItem = {
    id: uuidv4(),
    status: "PENDING",
    task: todo,
  };
  if (dateString in state.todoByDate) {
    state.todoByDate[dateString].push(newTodo);
  } else {
    state.todoByDate[dateString] = [newTodo];
  }
};

export { changeTodoStatusById, addTodo };
