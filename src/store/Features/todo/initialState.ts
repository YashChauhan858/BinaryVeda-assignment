export interface IinitialState {
  todo: todoItem;
}

type todoItem = { id: number; status: "DONE" | "PENDING"; task: string }[];

const initialState: IinitialState = {
  todo: [
    { id: 1, status: "DONE", task: "bring groceries" },
    { id: 2, status: "DONE", task: "bring groceries" },
    { id: 3, status: "DONE", task: "bring groceries" },
    { id: 4, status: "DONE", task: "bring groceries" },
    { id: 5, status: "DONE", task: "bring groceries" },
    { id: 6, status: "PENDING", task: "do assignment" },
    { id: 7, status: "PENDING", task: "do assignment 2" },
    { id: 8, status: "PENDING", task: "do assignment 2" },
    { id: 9, status: "PENDING", task: "do assignment 2" },
    { id: 10, status: "PENDING", task: "do assignment 2" },
    { id: 11, status: "PENDING", task: "do assignment 2" },
    { id: 12, status: "PENDING", task: "do assignment 2" },
    { id: 13, status: "PENDING", task: "do assignment 2" },
  ],
};

export default initialState;
