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
        sm_colspan={3}
        sm_rowspan={1}
        md_colspan={2}
        md_rowspan={1}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          Hello! I&apos;m Nana Kwasi,
          <br />a Software Engineer in Ghana🚀
        </h1>
        <Links />
      </GridContainer>
      <GridContainer
        sm_colspan={1}
        sm_rowspan={1}
        md_colspan={1}
        md_rowspan={1}
      >
        <Image src={heroImg} alt="hero" />
      </GridContainer>
    </>
  );
}

export default Hero;
