"use client";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed overflow-hidden w-screen z-[50] h-[10vh] dark:bg-secondary-dark py-5">
        <section className="max-w-[1000px] mx-auto h-full">
          <section className="flex justify-between items-center flex-wrap w-full px-5 h-full">
            <Link href={`/`}>
              <section className="flex items-center">
                <span className="text-lg font-bold text-primary-light dark:text-primary-dark">
                  nk.
                </span>
              </section>
            </Link>
            {/* Navbar: Large Screens */}
            <div className="bg-[#e7e6e6] dark:bg-[#2a2a2a] rounded-3xl px-4 hidden lg:flex gap-5 items-center py-2">
              {NavLinks.map((item, index) => {
                return (
                  <Link
                    href={item.href}
                    key={index}
                    className={
                      pathName === item.href
                        ? "text-primary-light dark:text-primary-dark"
                        : ""
                    }
                  >
                    <p>{item.name}</p>
                  </Link>
                );
              })}
              <DarkModeToggle />
            </div>
            {/* Navbar : Small Screens */}
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#e7e6e6] dark:bg-[#121212] rounded-3xl px-4 block lg:hidden gap-5 items-center py-2"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </section>
        </section>
      </nav>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[60]"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 mt-16 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-black dark:text-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="div">
                    <Link href={`/`} onClick={() => setIsOpen(false)}>
                      <section className="flex items-center">
                        <span className="text-lg font-bold text-primary-light dark:text-primary-dark">
                          nk.
                        </span>
                      </section>
                    </Link>
                  </Dialog.Title>
                  <br />
                  <section className="flex flex-col gap-5">
                    {NavLinks.map((item, index) => {
                      return (
                        <Link
                          href={item.href}
                          key={index}
                          className={
                            pathName === item.href
                              ? "text-primary-light dark:text-primary-dark"
                              : ""
                          }
                        >
                          <button onClick={() => setIsOpen(false)}>
                            <p>{item.name}</p>
                          </button>
                        </Link>
                      );
                    })}
                    <DarkModeToggle />
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Navbar;
