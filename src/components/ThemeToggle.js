"use client";
import { Button } from "@/components/ui/button";
import { useDashboard } from "@/context/DashBoardContext";



export default function ThemeToggle() {
  const { dark, toggleTheme } = useDashboard();

  return (
    <Button variant="outline" onClick={toggleTheme}>
      {dark ? "Light" : "Dark"}
    </Button>
  );
}
