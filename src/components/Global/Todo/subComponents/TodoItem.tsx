import { Dispatch, changeTodoStatusById } from "@/store";
import { todoItem } from "@/store/Features/todo/initialState";

const TodoItem = ({ todo }: { todo: todoItem }) => {
  const dispatch = Dispatch();
  // Change todo status to "DONE" or "Pending" by id
  const changeStatusById = (id: string) => dispatch(changeTodoStatusById(id));

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.status === "DONE" ? true : false}
        onClick={() => changeStatusById(todo.id)}
      />
      <p
        className={`${
          todo.status === "DONE" ? "line-through text-textColorMuted" : ""
        } truncate`}
      >
        {todo.task}
      </p>
    </div>
  );
};

export default TodoItem;
