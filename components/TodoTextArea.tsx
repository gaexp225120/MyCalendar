import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hook/useClickOutside";

type AddTabProps = {
  onClickOutside: () => void;
  addTodoHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};

const TodoTextArea: React.FC<AddTabProps> = (todoTextAeraProps) => {
  const { onClickOutside, addTodoHandler } = todoTextAeraProps;
  const ref = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useClickOutside(ref, onClickOutside);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full" ref={ref}>
      <textarea
        ref={textAreaRef}
        id="new-todo-input"
        name="todo"
        placeholder="Add New Task"
        autoComplete="off"
        className="w-full flex items-center p-4 rounded-md bg-todoItemBg focus:outline-none focus:ring-0 resize-none "
        required
      />
      <Button type="submit" className="my-[10px]" variant="secondary">
        Add
      </Button>
    </div>
  );
};

export default TodoTextArea;
