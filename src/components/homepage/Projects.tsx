"use client";
import { ProjectsList } from "@/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import GridContainer from "../ui/GridContainer";

function Projects() {
  const topProjects = ProjectsList.slice(0, 4);
  return (
    <section>
      <h1 className="text-xl">Recent Projects</h1>
      <br />
      <section className="grid grid-cols-4 gap-5">
        {topProjects.map((item) => {
          return (
            <GridContainer
              padding={true}
              sm_colspan={4}
              sm_rowspan={1}
              md_colspan={2}
              md_rowspan={1}
              key={item.id}
            >
              <a
                target="_blank"
                href={`https://${item.link}`}
                className="w-full text-[#777777] flex items-center gap-2"
              >
                <section className="w-full h-full rounded-xl">
                  <section>
                    <section className="flex flex-row justify-between items-center h-[10%]">
                      <section>
                        <h3 className="text-xl xl:text-2xl text-primary-light dark:text-primary-dark">
                          {item.title}
                        </h3>
                      </section>
                      <section className="border border-primary-light dark:border-primary-dark rounded-full p-3 w-[50px] h-[50px] flex justify-center items-center lg:text-2xl dark:text-white">
                        <MdArrowOutward />
                      </section>
                    </section>
                    <br />
                    <p>{item.about}</p>
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
                    className="rounded-3xl w-full object-cover"
                  />
                </section>
              </a>
            </GridContainer>
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
