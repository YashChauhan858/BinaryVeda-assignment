export interface IinitialState {
  todo: todoItem[];
}

export type todoItem = { id: string; status: "DONE" | "PENDING"; task: string };

const initialState: IinitialState = {
  todo: [
    { id: "1", status: "DONE", task: "bring groceries" },
    { id: "2", status: "DONE", task: "bring groceries" },
    { id: "3", status: "DONE", task: "bring groceries" },
    { id: "4", status: "DONE", task: "bring groceries" },
    { id: "5", status: "DONE", task: "bring groceries" },
    { id: "6", status: "PENDING", task: "do assignment" },
    { id: "7", status: "PENDING", task: "do assignment 2" },
  ],
};

export default initialState;
