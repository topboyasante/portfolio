import { workExprience } from "@/db";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Experience() {
  return (
    <main>
      <section className="w-full h-full">
        <section className="w-full flex justify-center items-center">
          <section className="w-full">
            <section className="">
              {workExprience.map((item, index) => {
                return (
                  <section
                    className="flex flex-col lg:flex-row my-5"
                    key={index}
                  >
                    <section className="w-full lg:w-[30%] uppercase text-sm text-primary-light dark:text-primary-dark">
                      {item.duration}
                    </section>
                    <section className="w-full lg:w-[70%]">
                      <h1 className="font-[500] text-md uppercase text-primary-light dark:text-primary-dark">
                        {item.title} • {item.company}
                      </h1>
                      <p className="my-3 content">{item.about}</p>
                      <section className="flex gap-5 flex-wrap my-5">
                        {item.tools.map((item, index) => {
                          return (
                            <section
                              className="rounded-full bg-primary-light dark:bg-primary-dark px-3 py-1 text-white dark:text-black dark-text-white text-center"
                              key={index}
                            >
                              <p className="text-xs uppercase font-[500]">
                                {item}
                              </p>
                            </section>
                          );
                        })}
                      </section>
                    </section>
                  </section>
                );
              })}
            </section>
          </section>
        </section>
        <section className="flex items-center gap-3 hover:text-primary-light dark:text-primary-dark ease duration-500 hover:border-primary hover:underline">
          <a
            href="https://docs.google.com/document/d/1EMBw7pgendo8UUvKk6UT8Xqf6Pf3uZPTzwOVlm5zG6Q/edit?usp=sharing"
            target="_blank"
            className="font-[500] text-md "
          >
            See more on my resume
          </a>
          <BsArrowRight />
        </section>
      </section>
    </main>
  );
}

export default Experience;
