"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

type CardProps = React.ComponentProps<typeof Card>;

type TodoCardType = {
  title: string;
  // Add other fields as necessary
};

type TodoCardProps = CardProps & {
  todoProp: TodoCardType;
};

const TodoCard = ({ todoProp }: TodoCardProps) => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const { title } = todoProp;
  const addTodoProps = { setTodoList };
  return (
    <Card className="w-[500px] bg-cardBg text-blue-100">
      <CardHeader>
        <CardTitle className="py-[12px] px-[6px]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {todoList.map((todo, index) => {
          return <div key={index}>todo</div>;
        })}
        <TodoItem />
      </CardContent>
      <CardFooter>
        <AddTodo addTodoProps={addTodoProps} />
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
