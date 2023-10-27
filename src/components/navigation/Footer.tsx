import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    name: "Home",
    link: "/",
  },
];

function Footer() {
  return (
    <footer className="max-w-[1000px] mx-auto  p-5 xl:px-0">
      <hr className="mb-5 border border-primary-light dark:border-primary-dark" />
      <section className="flex justify-between items-center">
        <h1>© 2023 Nana Kwasi Asante.</h1>
        <Link href={`/`}>
          <section className="flex items-center">
            <span className="text-xl font-bold text-primary-light dark:text-primary-dark">
              nk.
            </span>
          </section>
        </Link>
      </section>
    </footer>
  );
}

export default Footer;
