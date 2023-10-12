import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import * as actions from "./action";

const toDoSlice = createSlice({
  // Used for refrencing the slice
  // The name field and the key of reducer object are used to generate actionType string
  // like todo/incrementer
  name: "toDo",
  initialState,
  reducers: actions,
});

/**
 * createSlice function's object (toDoSlice) contains different fields in it :-
 * 1. reducer function that knows the logic to update state for the the cases we defined
 * 2. action creators for each of the different functions defined in the reducr field
 */
// Exporting actions
export const { changeTodoStatusById, addTodo } = toDoSlice.actions;

// Exporting reducer
export default toDoSlice.reducer;
