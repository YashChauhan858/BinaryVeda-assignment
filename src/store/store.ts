import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./Features/todo/toDoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  todo: toDoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

/**
 * @configureStore is a wrapper around redux createStore function and automatically sets up a
 * store with right defaults (middleware) like redux devtools extension, redux-thunk etc.
 * It also removes the hassel of using combineReducer as we can pass multiple reducers in the
 * reducer object
 */

export const store = configureStore({
  reducer: persistedReducer,
});

// Exporting types to make useDispatch and useSelector with the types we are providing
export type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
