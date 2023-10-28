"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="fixed overflow-hidden w-screen z-[50] nav-container h-[8vh] sm:h-[7vh] dark:bg-secondary-dark">
      <section className="max-w-[1000px] mx-auto h-full">
        <section className="flex justify-between items-center flex-wrap w-full px-5 xl:px-0 h-full">
          <motion.section initial={{ y: "-10vh" }} animate={{ y: 0 }}>
            <Link href={`/`}>
              <section className="flex items-center">
                <span className="text-lg font-bold text-primary-light dark:text-primary-dark">
                  nk.
                </span>
              </section>
            </Link>
          </motion.section>
          <motion.section
            initial={{ y: "10vh" }}
            animate={{ y: 0 }}
            className="flex items-center gap-2 w-full"
          >
            <DarkModeToggle />
            <a
              href="mailto:asantekwasi101@gmail.com"
              className="hover:scale-105 ease duration-500"
            >
              <span className="uppercase text-xs md:text-md md:w-[10%] border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-[45px] px-[8px] py-[5px] ">
                contact
              </span>
            </a>
          </motion.section>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
