import React from "react";
import Links from "../ui/Links";
import Image from "next/image";
import heroImg from "../../assets/nk.jpg";
import GridContainer from "../ui/GridContainer";

function Hero() {
  return (
    <>
      {/* Bio */}
      <GridContainer
        sm_colspan={4}
        sm_rowspan={1}
        md_colspan={3}
        md_rowspan={1}
        padding={true}
      >
        <h1 className="text-3xl md:text-4xl font-semibold">
          Hello! I&apos;m Nana Kwasi,
          <br />a Software Engineer in Ghana🚀
        </h1>
        <br />
        <p className="lg:text-xl font-light">Welcome to my Portfolio!</p>
        <br />
        <p className="lg:text-xl font-light">
          Currently, I&apos;m completing my internship as a Front-End Developer at{" "}
          <a href="#" className="text-primary-light dark:text-primary-dark">
            Axon Information Systems
          </a>
          .
        </p>
        <br />
        <Links />
      </GridContainer>
      <GridContainer
        sm_colspan={1}
        sm_rowspan={1}
        md_colspan={1}
        md_rowspan={2}
        padding={false}
      >
        <Image src={heroImg} alt="hero" className="h-full object-cover md:object-contain" />
      </GridContainer>
    </>
  );
}

export default Hero;
