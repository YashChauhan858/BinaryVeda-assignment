export interface IinitialState {
  todo: todoItem[];
}

export type todoItem = { id: string; status: "DONE" | "PENDING"; task: string };

const initialState: IinitialState = {
  todo: [
  ],
};

export default initialState;
