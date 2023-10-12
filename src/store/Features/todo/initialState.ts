export interface IinitialState {
  todoByDate: todoByDateType;
}

export type todoByDateType = Record<string, todoItem[]>;

export type todoItem = { id: string; status: "DONE" | "PENDING"; task: string };

const initialState: IinitialState = {
  todoByDate: {},
};

export default initialState;
