"use client";
import React, { useState } from "react";
import TodoTextArea from "./TodoTextArea";
import Image from "next/image";

type addTodoProps = {
  addTodoProps: {
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

const buttonCss =
  "pr-2  bg-transparent text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400";
const tabStlye =
  "w-full flex items-center p-[12px] rounded-md bg-todoItemBg focus:outline-none focus:ring-0 cursor-pointer";

const AddTodo: React.FC<addTodoProps> = ({ addTodoProps }) => {
  const { setTodoList } = addTodoProps;
  const [clickAdd, setClickAdd] = useState(false);

  const addTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from reloading the page

    const formData = new FormData(event.target as HTMLFormElement); // Create FormData object
    const newTodo = formData.get("todo") as string; // Retrieve the 'todo' field value

    if (newTodo.trim() !== "") {
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]); // Add new todo to list
    }
  };

  const clickAddhandler = () => {
    setClickAdd(true);
  };
  return (
    <div className="w-full  ">
      <form className="w-auto" onSubmit={addTodoHandler}>
        <div className="flex flex-col font-gloria">
          <div className="flex flex-row">
            {clickAdd ? (
              <TodoTextArea
                addTodoHandler={addTodoHandler}
                onClickOutside={() => setClickAdd(false)}
              />
            ) : (
              <div className={tabStlye} onClick={clickAddhandler}>
                <button type="submit" className={buttonCss}>
                  <Image
                    src="/plus.svg" // This path is relative to the `public` folder
                    alt="Plus Icon"
                    width={16}
                    height={16}
                  />
                </button>
                <p>1234</p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
