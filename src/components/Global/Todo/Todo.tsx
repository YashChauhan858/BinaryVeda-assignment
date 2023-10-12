import { useState, FormEvent } from "react";
import { Dispatch, Selector, addTodo } from "@/store";
import TodoItem from "./subComponents/TodoItem";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Todo = () => {
  const [todoWidgetState, setTodoWidgetState] = useState({
    show: true,
    todo: "",
    showCalendar: false,
    todoDate: new Date().toLocaleDateString("en-US"),
  });

  // Fetch todo object from redux store
  const todoByDate = Selector((state) => state.todo.todoByDate);
  // Picking the todo list by date (string => dd/mm/yyyy)
  const todoList = todoByDate[todoWidgetState.todoDate] ?? [];

  // Check whether the list is a valid or not
  const isValidTodoList = !!todoList && todoList.length !== 0;

  const dispatch = Dispatch();

  // Toggle todo widget UI
  const toggler = () =>
    setTodoWidgetState((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));

  // Toggle todo calendar
  const togglerCalendar = () =>
    setTodoWidgetState((prevState) => ({
      ...prevState,
      showCalendar: !prevState.showCalendar,
    }));

  // Todo input box handler
  const todoHandler = (todo: string) =>
    setTodoWidgetState((prevState) => ({
      ...prevState,
      todo,
    }));

  // Todo date handler
  const todoDateHandler = (d: Date) => {
    // User cannot add a date less than the current date
    const isInvalidDate =
      d.getTime() < new Date(new Date().toLocaleDateString("en-US")).getTime();
    if (isInvalidDate) return;
    setTodoWidgetState((prevState) => ({
      ...prevState,
      todoDate: d.toLocaleDateString("en-US"),
    }));
  };

  // Add new todo to list
  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        todo: todoWidgetState.todo,
        dateString: todoWidgetState.todoDate,
      })
    );
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
        <div className="h-80 w-72 bg-white absolute -top-[20.8rem] right-3 rounded-lg p-2">
          {todoWidgetState.showCalendar && (
            <div className="absolute -top-[20rem] right-0 lg:top-0 lg:right-[105%]">
              <Calendar
                value={new Date(todoWidgetState.todoDate)}
                onChange={(d) => {
                  todoDateHandler(d as Date);
                }}
              />
            </div>
          )}
          <div className="triangleClip bg-white absolute -bottom-3 right-4 w-5 h-3"></div>
          <div className="mb-3">
            <p onClick={togglerCalendar}>
              {todoWidgetState.todoDate ===
              new Date().toLocaleDateString("en-US")
                ? "Today"
                : todoWidgetState.todoDate}
            </p>
          </div>
          <div className="overflow-scroll overflow-x-hidden h-56">
            {isValidTodoList &&
              todoList.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  todoDate={todoWidgetState.todoDate}
                />
              ))}
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
