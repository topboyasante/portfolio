"use client";
import { ProjectsList } from "@/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import GridContainer from "../ui/GridContainer";

function Projects() {
  const topProjects = ProjectsList.slice(0, 4);
  return (
    <>
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
              className="w-full text-[#777777] hover:text-primary-light dark:hover:text-primary-dark ease duration-500 flex items-center gap-2"
            >
              <section className="w-full h-full rounded-xl">
                <section>
                  <section className="flex flex-col md:flex-row md:justify-between md:items-center h-[10%]">
                    <section>
                      <h3 className="text-xl xl:text-2xl text-primary-light dark:text-primary-dark">
                        {item.title}
                      </h3>
                    </section>
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
    </>
  );
}

export default Projects;
