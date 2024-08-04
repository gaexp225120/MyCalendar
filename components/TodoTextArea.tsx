import React, { RefObject, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hook/useClickOutside";
import { useFocusTextArea } from "@/hook/useFocusTextArea";

type AddTabProps = {
  onClickOutside: () => void;
  textAreaRef: RefObject<HTMLTextAreaElement>;
};

const TodoTextArea: React.FC<AddTabProps> = (todoTextAeraProps) => {
  const { onClickOutside, textAreaRef } = todoTextAeraProps;
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClickOutside);
  const focusTextArea = useFocusTextArea(textAreaRef);

  useEffect(() => {
    focusTextArea();
  }, [textAreaRef]);

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
