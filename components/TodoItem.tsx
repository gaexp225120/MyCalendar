import React from "react";

const TodoItem = () => {
  return (
    <div className=" flex items-center p-4 rounded-md bg-todoItemBg ">
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">Push Notifications</p>
      </div>
    </div>
  );
};

export default TodoItem;
