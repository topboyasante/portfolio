import Hero from "@/components/homepage/Hero";
import Projects from "@/components/homepage/Projects";
import TechStack from "@/components/homepage/TechStack";
import React from "react";

function Page() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
}

export default Page;
