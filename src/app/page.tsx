import Hero from "@/components/homepage/Hero";
import Projects from "@/components/homepage/Projects";
import TechStack from "@/components/homepage/TechStack";
import ResumeButton from "@/components/ui/ResumeButton";
import React from "react";

function Page() {
  return (
    <main>
      <Hero />
      <hr className="mb-5 lg:hidden border-primary-light dark:border-primary-dark" />
      <TechStack />
      <Projects />
      <ResumeButton />
    </main>
  );
}

export default Page;
