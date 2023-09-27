import Link from "next/link";
import React from "react";
import DarkModeToggle from "../ui/DarkModeToggle";

function Navbar() {
  return (
    <nav className="fixed w-screen z-[50] nav-container h-[7vh]">
      <section className="max-w-[900px] mx-auto h-full">
        <section className="flex justify-between items-center flex-wrap w-full px-5 xl:px-0 h-full">
          <Link href={`/`}>
            <section className="flex items-center">
              <span className="text-lg font-bold text-primary-light dark:text-primary-dark">
                nk.
              </span>
            </section>
          </Link>
          <section className="flex items-center gap-5">
            <a href="mailto:asantekwasi101@gmail.com">
              <span className="uppercase text-xs md:text-md md:w-[10%] border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-[45px] px-[8px] py-[5px] hover:text-white ease duration-500 hover:border-white">
                contact
              </span>
            </a>
            <DarkModeToggle />
          </section>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
