"use client";
import React, { useState } from "react";
import Image from "next/image";

const buttonCss =
  " px-6 py-2 bg-transparent text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400";

type addTodoProps = {
  addTodoProps: {
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

const AddTodo: React.FC<addTodoProps> = ({ addTodoProps }) => {
  const { setTodoList } = addTodoProps;

  const addTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from reloading the page

    const formData = new FormData(event.target as HTMLFormElement); // Create FormData object
    const newTodo = formData.get("todo") as string; // Retrieve the 'todo' field value

    if (newTodo.trim() !== "") {
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]); // Add new todo to list
    }
  };

  return (
    <div className="mx-auto max-w-7xl  px-6 lg:px-8">
      <form
        className="w-auto flex justify-center my-[20px]"
        onSubmit={addTodoHandler}
      >
        <div className="flex flex-col font-gloria">
          <div className="flex flex-row gap-5 my-5">
            <button type="submit" className={buttonCss}>
              <Image
                src="/plus.svg" // This path is relative to the `public` folder
                alt="Plus Icon"
                className="w-8 h-8"
                width={8}
                height={8}
              />
            </button>
            <input
              type="text"
              id="new-todo-input"
              name="todo"
              placeholder="Add New Task"
              autoComplete="off"
              className="w-full p-3 rounded-[5px] focus:outline-none focus:ring-0 focus:border-contactBorder border-[3px] border-transparent"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
