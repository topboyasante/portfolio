import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { MdLogoDev } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";

function Links() {
  return (
    <section className="flex gap-8 my-8 lg:w-full flex-wrap justify-start">
          <a
            href="https://www.linkedin.com/in/nana-kwasi-asante-abb32a226/"
            target="_blank"
            className="text-xl lg:text-2xl hover:scale-105 hover:text-primary-light dark:hover:text-primary-dark ease duration-500"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://github.com/topboyasante/"
            target="_blank"
            className="text-xl lg:text-2xl hover:scale-105 hover:text-primary-light dark:hover:text-primary-dark ease duration-500"
          >
            <SiGithub />
          </a>
          <a
            href="https://dev.to/topboyasante"
            target="_blank"
            className="text-xl lg:text-2xl hover:scale-105 hover:text-primary-light dark:hover:text-primary-dark ease duration-500"
          >
            <MdLogoDev />
          </a>
          <a
            href="https://www.instagram.com/topboyasante_/"
            target="_blank"
            className="text-xl lg:text-2xl hover:scale-105 hover:text-primary-light dark:hover:text-primary-dark ease duration-500"
          >
            <SiInstagram />
          </a>
          <a
            href="mailto:asantekwasi101@gmail.com"
            target="_blank"
            className="text-xl lg:text-2xl hover:scale-105 hover:text-primary-light dark:hover:text-primary-dark ease duration-500"
          >
            <IoMailOpenOutline />
          </a>
        </section>
  )
}

export default Links