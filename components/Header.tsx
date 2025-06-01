"use client";

import { BookOpen, FilePen, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="relative p-14 text-center">
      <Link href="/">
        <h1 className="text-6xl font-bold">DreamScript AI</h1>
        <div className="flex space-x-5 text-3xl lg:text-5xl justify-center whitespace-nowrap">
          <h2>Bringing your stories</h2>
          <div className="relative">
            <div className="absolute bg-purple-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1" />
            <p className="relative text-white">To life!</p>
          </div>
        </div>
      </Link>

      <div className="flex space-x-2 absolute -top-5 right-5">
        <div
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-500 mt-10 border border-purple-500 p-2 rounded-md hover:opacity-50 cursor-pointer mr-2 ${
            isDark ? "rotate-180" : "rotate-0"
          }`}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
          )}
        </div>
        <Link href="/">
          <FilePen className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-500 mt-10 border border-purple-500 p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
        <Link href="/stories">
          <BookOpen className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-500 mt-10 border border-purple-500 p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
