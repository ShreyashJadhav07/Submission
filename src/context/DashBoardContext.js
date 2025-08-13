"use client";
import { createContext, useContext, useState, useEffect } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  // To-Do reminders
  const [todos, setTodos] = useState([
    { id: 1, text: "Call client about investment", reminded: false },
    { id: 2, text: "Review portfolio changes", reminded: false },
  ]);

  // Dark mode
  const [dark, setDark] = useState(false);

  // On mount, sync dark mode with localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const markReminded = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, reminded: true } : t))
    );
  };

  return (
    <DashboardContext.Provider
      value={{
        todos,
        setTodos,
        markReminded,
        dark,
        toggleTheme,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}