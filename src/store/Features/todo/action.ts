import { PayloadAction } from "@reduxjs/toolkit";
import { IinitialState } from "./initialState";

const changeTodoStatusById = (
  state: IinitialState,
  action: PayloadAction<number>
) => {
  const id = action.payload;
  state.todo.forEach((todo) => {
    if (todo.id === id) {
      todo.status = todo.status === "DONE" ? "PENDING" : "DONE";
    }
  });
};

export { changeTodoStatusById };
