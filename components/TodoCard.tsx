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

const TodoCard: React.FC<TodoCardProps> = ({ todoProp }) => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [ongoingList, setOngoingList] = useState<string[]>([]);
  const [finishedList, setFinishedList] = useState<string[]>([]);
  const { title } = todoProp;

  return (
    <div className="flex flex-row gap-4">
      <Card className="w-[300px] bg-cardBg text-blue-100">
        <CardHeader>
          <CardTitle className="py-[12px] px-[6px]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {todoList.map((todo, index) => {
            return <div key={index}>{<TodoItem todoItem={todo} />}</div>;
          })}
        </CardContent>
        <CardFooter>
          <AddTodo setTodoList={setTodoList} />
        </CardFooter>
      </Card>
      <Card className="w-[500px] bg-cardBg text-blue-100">
        <CardHeader>
          <CardTitle className="py-[12px] px-[6px]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {todoList.map((todo, index) => {
            return <div key={index}>{<TodoItem todoItem={todo} />}</div>;
          })}
        </CardContent>
        <CardFooter>
          <AddTodo setTodoList={setTodoList} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default TodoCard;
