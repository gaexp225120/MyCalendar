import TodoCard from "@/components/TodoCard";

export default function Home() {
  const todoCard = {
    title: "Todo items",
  };
  return (
    <main className="min-h-auto bg-background">
      <div id="borad-canva" className="mt-3 mx-3">
        <TodoCard todoProp={todoCard} />
      </div>
    </main>
  );
}
