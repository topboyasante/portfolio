"use client";
import Links from "../ui/Links";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="pt-[2vh]">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Hello! I&apos;m Nana Kwasi,
          {/* <br />a Software Engineer in Ghana🚀 */}
        </h1>
        {/* <p className="text-xl md:text-2xl xl:text-3xl my-3 text-[#777777]">
          Currently a Frontend Developer Intern at{" "}
          <a
            className="text-primary-light dark:text-primary-dark"
            target="_blank"
            href="https://axoninfosystems.com/v5/"
          >
            Axon Information Systems
          </a>
        </p> */}
        <p className="text-xl md:text-2xl xl:text-3xl my-3 text-[#777777]">
          This page is under development. stay tuned!
        </p>
        <section className="flex justify-between items-center">
          <Links />
          <div className="hidden lg:block w-full h-[1px] bg-primary-light dark:bg-primary-dark"></div>
        </section>
      </motion.section>
    </section>
  );
}

export default Hero;
