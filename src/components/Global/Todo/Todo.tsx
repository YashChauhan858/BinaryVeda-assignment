import { useState, FormEvent } from "react";
import { Dispatch, Selector, addTodo } from "@/store";
import TodoItem from "./subComponents/TodoItem";

const Todo = () => {
  // Fetch todo list from redux store
  const todoList = Selector((state) => state.todo.todo);
  // Check whether the list is a valid or not
  const isValidTodoList = !!todoList && todoList.length !== 0;

  const dispatch = Dispatch();

  const [todoWidgetState, setTodoWidgetState] = useState({
    show: true,
    todo: "",
  });
  // Toggle todo widget UI
  const toggler = () =>
    setTodoWidgetState((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));
  // Todo input box handler
  const todoHandler = (todo: string) =>
    setTodoWidgetState((prevState) => ({
      ...prevState,
      todo,
    }));

  // Add new todo to list
  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todoWidgetState.todo));
    // Reset todo input field
    setTodoWidgetState((prevState) => ({
      ...prevState,
      todo: "",
    }));
  };

  return (
    <div className="fixed bottom-5 right-5 select-none">
      <div
        className="rounded-full p-4 bg-textColor text-backgroundColor cursor-pointer"
        onClick={toggler}
      >
        <h4>TODO</h4>
      </div>
      {todoWidgetState.show && (
        <div className="h-72 w-72 bg-white absolute -top-[19rem] right-3 rounded-lg p-2">
          <div className="overflow-scroll overflow-x-hidden h-56">
            {isValidTodoList &&
              todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            {!isValidTodoList && (
              <div className="h-full w-full grid place-content-center">
                <p className="font-semibold text-textColorMuted">No Todo</p>
              </div>
            )}
          </div>
          <form onSubmit={addNewTodo}>
            <input
              type="text"
              placeholder="New Todo"
              value={todoWidgetState.todo}
              className="outline-none mt-3"
              onChange={({ target: { value } }) => todoHandler(value)}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Todo;
