"use client";
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="hover:scale-105 ease duration-500 aspect-square p-1 w-fit grid place-items-center border-[1px] border-primary-light dark:border-primary-dark rounded-md cursor-pointer"
    >
      {theme === "light" ? (
        <RiMoonLine className="text-primary-light dark:text-primary-dark" />
      ) : (
        <RiSunLine className=" text-primary-light dark:text-primary-dark" />
      )}
    </button>
  );
};

export default DarkModeToggle;
