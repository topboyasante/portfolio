import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Projects from "@/components/homepage/Projects";
import TechStack from "@/components/homepage/TechStack";
import ResumeButton from "@/components/ui/ResumeButton";
import React from "react";

function Page() {
  return (
    <main className="grid grid-cols-3 gap-5 my-5">
      <Hero />
      <TechStack/>
      <About/>
      <Projects/>
      <ResumeButton/>
    </main>
  );
}

export default Page;
