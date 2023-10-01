import React from "react";
import Links from "../ui/Links";
import Image from "next/image";
import HeroImg from "../../assets/smiling.webp";
function Hero() {
  return (
    <section className="pt-[2vh]">
      <section>
        <section className="flex flex-col md:flex-row sm:items-center gap-5">
          <Image
            src={HeroImg}
            alt="asante"
            className="w-[80px] sm:w-[120px] rounded-full bg-primary-light dark:bg-primary-dark"
            id="hero-img"
          />
          <section>
            <h1 className="text-2xl lg:text-4xl lg:text-left text-primary-light dark:text-primary-dark">
              Nana Kwasi Asante
            </h1>
            <h1 className="text-md lg:text-lg lg:text-left">
              Software Engineer
            </h1>
            <p>
              Currently a Frontend Developer Intern at{" "}
              <a
                className="text-primary-light dark:text-primary-dark"
                href="https://axoninfosystems.com/v5/"
              >
                Axon Information Systems
              </a>
            </p>
          </section>
        </section>
        <br />
        <section>
          <h1 className="text-2xl lg:text-3xl text-left font-bold text-primary-light dark:text-primary-dark mb-5">
            About Me
          </h1>
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
        </section>
      </section>
    </section>
  );
}

export default Hero;
