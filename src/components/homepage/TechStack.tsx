import React from "react";
import GridContainer from "../ui/GridContainer";
import Marquee from "react-fast-marquee";
import { TechStackList } from "@/db";

function TechStack() {
  return (
    <GridContainer padding={true} sm_colspan={3} sm_rowspan={1} md_colspan={3} md_rowspan={1}>
      {/* <section className="flex flex-col justify-center h-full"> */}
        <h1 className="font-semibold text-xl">My Stack</h1>
        <br />
        <Marquee>
          {TechStackList.map((item) => {
            return (
              <div
                key={item.id}
                className="text-2xl lg:text-4xl hover:text-primary-light dark:hover:text-primary-dark ease duration-500 mx-8"
              >
                <item.icon />
              </div>
            );
          })}
        </Marquee>
      {/* </section> */}
    </GridContainer>
  );
}

export default TechStack;
