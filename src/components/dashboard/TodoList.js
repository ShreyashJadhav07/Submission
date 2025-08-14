
"use client";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useDashboard } from "@/context/DashBoardContext";

export default function TodoList() {
  const { todos, markReminded } = useDashboard();

  const handleView = () => toast.success("Task Completed...");
  const handleRemind = () => toast.success("Reminder set!");

  const defaultTodos = [
    { id: 1, text: "Call client about Investment", reminded: false },
    { id: 2, text: "Review portfolio changes", reminded: false }
  ];

  const displayTodos = todos && todos.length > 0 ? todos : defaultTodos;

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground rounded-xl shadow-md border border-border h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">To-Do's</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 pt-0">
          {displayTodos.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            >
              <span
                className={`text-sm ${
                  item.reminded
                    ? "text-muted-foreground line-through"
                    : "text-foreground"
                }`}
              >
                {item.text}
              </span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={handleView}
                  className="bg-primary text-primary-foreground hover:opacity-90 cursor-pointer"
                >
                  Mark
                </Button>
                <Button
                  size="sm"
                  onClick={() => markReminded ? markReminded(item.id) : handleRemind()}
                  className="cursor-pointer"
                >
                  Remind
                </Button>
              </div>
            </div>
          ))}

          {(!todos || todos.length === 0) && displayTodos.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-6">
              Task completed
            </p>
          )}
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
