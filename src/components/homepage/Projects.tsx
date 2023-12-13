"use client";
import { ProjectsList } from "@/db";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import GridContainer from "../ui/GridContainer";

function Projects() {
  const topProjects = ProjectsList.slice(0, 3);
  return (
    <>
      {topProjects.map((item) => {
        return (
          <GridContainer
            sm_colspan={3}
            sm_rowspan={1}
            md_colspan={3}
            md_rowspan={1}
            key={item.id}
          >
            <a
              target="_blank"
              href={`https://${item.link}`}
              className="w-full text-[#777777] hover:text-primary-light dark:hover:text-primary-dark ease duration-500 flex items-center gap-2"
            >
              <section className="w-full bg-[#ffffff] dark:bg-[#121212] md:h-[550px] lg:h-[650px] rounded-xl p-5">
                <section>
                  <section className="flex flex-col md:flex-row md:justify-between md:items-center h-[10%]">
                    <section>
                      <h3 className="text-xl xl:text-2xl text-primary-light dark:text-primary-dark">
                        {item.title}
                      </h3>
                      <p>{item.about}</p>
                    </section>
                    <section className="flex items-center gap-2">
                      {item.link}
                      <BsArrowRight />
                    </section>
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
                <Image
                  src={item.img}
                  alt={item.title}
                  className="rounded-3xl w-full h-[90%] object-cover"
                />
              </section>
            </a>
          </GridContainer>
        );
      })}
    </>
  );
}

export default Projects;
