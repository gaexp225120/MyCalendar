"use client";
import React, { useState } from "react";
import Image from "next/image";

const buttonCss =
  " px-6 py-2 bg-transparent text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400";

function Todo() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from reloading the page

    const formData = new FormData(event.target as HTMLFormElement); // Create FormData object
    const newTodo = formData.get("todo") as string; // Retrieve the 'todo' field value

    if (newTodo.trim() !== "") {
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]); // Add new todo to list
    }
  };

  return (
    <div className="bg-background py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl  px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-caveat font-bold tracking-tight text-pureWhite sm:text-4xl">
            TO DO LIST
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {todoList.map((list, index) => (
            <div
              key={index}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              {list}
            </div>
          ))}
        </div>
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
    </div>
  );
}

export default Todo;
