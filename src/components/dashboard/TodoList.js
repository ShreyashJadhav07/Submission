"use client";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useDashboard } from "@/context/DashBoardContext";

export default function TodoList() {
  const { todos, markReminded } = useDashboard();

  const handleWish = () => toast.success("Wish recorded!");

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">To-Do’s</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 pt-0">
          {todos.map((item) => (
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
                  onClick={handleWish}
                  className="bg-primary text-primary-foreground hover:opacity-90 cursor-pointer"
                >
                  Wish
                </Button>
                <Button
                  size="sm"
                  variant={item.reminded ? "secondary" : "default"}
                  onClick={() => markReminded(item.id)}
                  className="cursor-pointer"
                >
                  {item.reminded ? "Reminded" : "Remind"}
                </Button>
              </div>
            </div>
          ))}

          {todos.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-6">
              All tasks completed! 🎉
            </p>
          )}
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
