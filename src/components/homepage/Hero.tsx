import React from "react";
import Links from "../ui/Links";

function Hero() {
  return (
    <section className="pt-[2vh]">
      <section>
        <section className="flex items-center gap-3">
          <section>
            <h1 className="text-2xl lg:text-5xl lg:text-left text-primary-light dark:text-primary-dark mb-2">
              Nana Kwasi Asante
            </h1>
            <p className="text-md lg:text-xl lg:text-left text-[#777777]">
              Software Engineer
            </p>
          </section>
        </section>
        <main className=" my-5">
          <section>
            <p className="lg:text-lg  lg:text-left content">
              {`A skilled software engineer
          specializing in React and C#. I thrive on crafting dynamic user
          interfaces with React on the front end, while building powerful
          server-side solutions using C# on the backend. Let's collaborate
          and bring your ideas to life!`}
            </p>
            <br />
            <p className="lg:text-lg  lg:text-left content">
              {`Currently, I'm building`}{" "}
              <span className="text-primary-light dark:text-primary-dark">
                <a href="https://github.com/biteadvisor" target="_blank">
                  BiteAdvisor
                </a>
              </span>{" "}
              - an elegant application designed to help you explore a wide array
              of restaurants, all meticulously rated and thoughtfully reviewed
              by fellow diners.
            </p>
            <Links />
          </section>
        </main>
      </section>
    </section>
  );
}

export default Hero;
