"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import AddTodo from "./AddTodo";

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
    <Card className="w-[500px] bg-cardbg text-blue-100">
      <CardHeader>
        <CardTitle className="py-[12px] px-[6px]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center p-4 rounded-md bg-gray-600 ">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <AddTodo addTodoProps={addTodoProps} />
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
