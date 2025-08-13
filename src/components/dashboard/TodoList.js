"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([
    { id: 1, text: "Call client about investment", reminded: false },
    { id: 2, text: "Review portfolio changes", reminded: false },
  ]);

  const handleWish = () => toast.success("Wish recorded!");
  const handleRemind = (id) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, reminded: true } : item
      )
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>To-Do’s</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <span className={item.reminded ? "text-gray-400 line-through" : ""}>
              {item.text}
            </span>
            <div className="flex gap-2">
              <Button size="sm" onClick={handleWish}>Wish</Button>
              <Button
                size="sm"
                variant={item.reminded ? "secondary" : "default"}
                onClick={() => handleRemind(item.id)}
              >
                {item.reminded ? "Reminded" : "Remind"}
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
