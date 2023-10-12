import { useState } from "react";
import { Dispatch, Selector, changeTodoStatusById } from "@/store";

const Todo = () => {
  // Fetch todo list from redux store
  const todoList = Selector((state) => state.todo.todo);
  // Check whether the list is a valid or not
  const isValidTodoList = !!todoList && todoList.length !== 0;

  const dispatch = Dispatch();
  // Change todo status to "DONE" or "Pending" by id
  const changeStatusById = (id: number) => dispatch(changeTodoStatusById(id));

  const [toggleTodoWidget, setToggleTodoWidget] = useState(true);
  // Toggle todo widget UI
  const toggler = () => setToggleTodoWidget((prevState) => !prevState);

  return (
    <div className="fixed bottom-5 right-5 select-none">
      <div
        className="rounded-full p-4 bg-textColor text-backgroundColor cursor-pointer"
        onClick={toggler}
      >
        <h4>TODO</h4>
      </div>
      {toggleTodoWidget && (
        <div className="h-72 w-72 bg-white absolute -top-[19rem] right-3 rounded-lg p-2">
          <div className="overflow-scroll overflow-x-hidden h-56">
            {isValidTodoList &&
              todoList.map((todo) => (
                <div key={todo.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={todo.status === "DONE" ? true : false}
                    onClick={() => changeStatusById(todo.id)}
                  />
                  <p
                    className={`${
                      todo.status === "DONE"
                        ? "line-through text-textColorMuted"
                        : ""
                    } truncate`}
                  >
                    {todo.task}
                  </p>
                </div>
              ))}
          </div>
          <input
            type="text"
            placeholder="New Todo"
            className="outline-none mt-3"
          />
        </div>
      )}
    </div>
  );
};

export default Todo;
