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
    <footer>
      <hr className="mb-5 border border-primary-light dark:border-primary-dark" />
      <section className="text-center">
        <h1>Copyright © 2023 Nana Kwasi Asante. All rights reserved.</h1>
      </section>
    </footer>
  );
}

export default Footer;
