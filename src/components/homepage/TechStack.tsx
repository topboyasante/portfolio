import {TechStackList} from "@/db";
import React from "react";
import Marquee from "react-fast-marquee";

function TechStack() {
  return (
    <section className="w-full mb-5">
      <h1 className="text-2xl lg:text-3xl text-left font-bold text-primary-light dark:text-primary-dark mb-5">
        Tech Stack
      </h1>
      <Marquee>
        {TechStackList.map((item) => {
          return (
            <div
              key={item.id}
              className="text-2xl lg:text-3xl hover:text-primary-light dark:hover:text-primary-dark ease duration-500 mx-5"
            >
                <item.icon/>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}

export default TechStack;
