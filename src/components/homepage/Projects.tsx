import { ProjectsList } from "@/db";
import React from "react";

function Projects() {
  return (
    <section className="w-full">
      <h1 className="text-2xl lg:text-3xl text-left font-bold text-primary-light dark:text-primary-dark">
        Projects
      </h1>
      <section className="flex flex-col gap-5 my-5">
        {ProjectsList.map((item) => {
          return (
            <section key={item.id} className="col-span-1">
              <h1 className="text-primary-light dark:text-primary-dark">
                {item.title}
              </h1>
              <p>{item.about}</p>
              <a target="_blank" href={`https://${item.link}`} className="text-[#777777]">{item.link}</a>
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
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
