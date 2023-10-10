import Link from "next/link";
import React from "react";
import DarkModeToggle from "../ui/DarkModeToggle";

function Navbar() {
  return (
    <nav className="fixed w-screen z-[50] nav-container h-[8vh] sm:h-[7vh] dark:bg-secondary-dark">
      <section className="max-w-[700px] mx-auto h-full p-5">
        <section className="flex justify-between items-center flex-wrap w-full px-5 xl:px-0 h-full">
          <Link href={`/`}>
            <section className="flex items-center">
              <span className="text-lg font-bold text-primary-light dark:text-primary-dark">
                nk.
              </span>
            </section>
          </Link>
          <section className="flex items-center gap-5 ">
            <DarkModeToggle />
            <a
              href="mailto:asantekwasi101@gmail.com"
              className="hover:scale-105 ease duration-500"
            >
              <span className="uppercase text-xs md:text-md md:w-[10%] border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-[45px] px-[8px] py-[5px] ">
                contact
              </span>
            </a>
          </section>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
