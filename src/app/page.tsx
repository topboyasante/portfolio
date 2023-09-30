import Experience from "@/components/homepage/Experience";
import Hero from "@/components/homepage/Hero";
import Projects from "@/components/homepage/Projects";
import TechStack from "@/components/homepage/TechStack";
import React from "react";

function Page() {
  return (
    <main>
      <Hero />
      <br />
      <TechStack />
      <br />
      <Experience/>
      <br />
      <Projects />
      <br />
    </main>
  );
}

export default Page;
