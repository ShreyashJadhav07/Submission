"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">Financial Dashboard</h1>
      <nav className="flex gap-4 items-center cursor-pointer">
        <Link href="/"><Button variant="ghost" className="cursor-pointer">Dashboard</Button></Link>
        <Link href="/investors"><Button variant="ghost" className="cursor-pointer">Investors</Button></Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}