import React from "react";

type TodoItemProps = {
  todoItem: string;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todoItem } = props;
  return (
    <div className=" flex items-center p-4 rounded-md bg-todoItemBg ">
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none break-all">{todoItem}</p>
      </div>
    </div>
  );
};

export default TodoItem;
