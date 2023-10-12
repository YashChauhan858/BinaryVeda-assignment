import { useState } from "react";
import { Selector } from "@/store";

const Todo = () => {
  const todoList = Selector((state) => state.todo.todo);

  const isValidTodoList = !!todoList && todoList.length !== 0;

  const [toggleTodoWidget, setToggleTodoWidget] = useState(true);

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
                  />
                  <p
                    className={`${
                      todo.status === "DONE"
                        ? "line-through text-textColorMuted"
                        : ""
                    }`}
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
