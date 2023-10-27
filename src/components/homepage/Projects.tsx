"use client";
import { ProjectsList } from "@/db";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsArrowRight, BsGlobe } from "react-icons/bs";

function Projects() {
  return (
    <section className="w-full">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl lg:text-3xl text-left font-bold text-primary-light dark:text-primary-dark"
      >
        Projects
      </motion.h1>
      <section className="grid grid-cols-1 gap-5 my-5">
        {ProjectsList.map((item) => {
          return (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={item.id}
              className="col-span-1 w-full"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="rounded-3xl md:h-[350px] lg:h-[500px] object-cover"
              />
              <section className="my-3 p-4">
                <section className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl text-primary-light dark:text-primary-dark">
                    {item.title}
                  </h3>
                  <a
                    target="_blank"
                    href={`https://${item.link}`}
                    className="text-[#777777] hover:text-primary-light dark:hover:text-primary-dark ease duration-500 flex  items-center gap-2"
                  >
                    {item.link}
                    <BsArrowRight />
                  </a>
                </section>
                <section className="flex gap-5 flex-wrap">
                  {item.stack.map((stack) => {
                    return (
                      <div
                        key={stack.id}
                        className="text-xl lg:text-2xl hover:text-primary-light dark:hover:text-primary-dark ease duration-500 mt-3"
                      >
                        <stack.icon />
                      </div>
                    );
                  })}
                </section>
              </section>
            </motion.section>
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
