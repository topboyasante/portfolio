import About from "@/components/homepage/About";
import Contact from "@/components/homepage/Contact";
import Hero from "@/components/homepage/Hero";
import Projects from "@/components/homepage/Projects";
import TechStack from "@/components/homepage/TechStack";
import ResumeButton from "@/components/ui/ResumeButton";
import React from "react";

function Page() {
  return (
    <main className="grid grid-cols-4 gap-5 my-5">
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <ResumeButton />
    </main>
  );
}

export default Page;
