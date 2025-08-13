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
      <Card className="bg-card text-card-foreground shadow-soft rounded-xl">
        <CardHeader>
          <CardTitle>To-Do’s</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {todos.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <span className={item.reminded ? "text-muted-foreground line-through" : ""}>
                {item.text}
              </span>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleWish} className="bg-primary text-primary-foreground">Wish</Button>
                <Button
                  size="sm"
                  variant={item.reminded ? "secondary" : "default"}
                  onClick={() => markReminded(item.id)}
                >
                  {item.reminded ? "Reminded" : "Remind"}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
