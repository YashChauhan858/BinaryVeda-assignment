interface IinitialState {
  todo: todoItem;
}

type todoItem = { id: number; status: "DONE" | "PENDING"; task: string }[];

const initialState: IinitialState = {
  todo: [
    { id: 1, status: "DONE", task: "bring groceries" },
    { id: 1, status: "DONE", task: "bring groceries" },
    { id: 1, status: "DONE", task: "bring groceries" },
    { id: 1, status: "DONE", task: "bring groceries" },
    { id: 1, status: "DONE", task: "bring groceries" },
    { id: 2, status: "PENDING", task: "do assignment" },
    { id: 3, status: "PENDING", task: "do assignment 2" },
    { id: 3, status: "PENDING", task: "do assignment 2" },
    { id: 3, status: "PENDING", task: "do assignment 2" },
    { id: 3, status: "PENDING", task: "do assignment 2" },
    { id: 3, status: "PENDING", task: "do assignment 2" },
    { id: 3, status: "PENDING", task: "do assignment 2" },
    { id: 3, status: "PENDING", task: "do assignment 2" },
  ],
};

export default initialState;
