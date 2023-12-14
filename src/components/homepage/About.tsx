import React from "react";
import GridContainer from "../ui/GridContainer";

function About() {
  return (
    <GridContainer padding={true} sm_colspan={4} sm_rowspan={1} md_colspan={4} md_rowspan={1}>
      <h1 className="font-semibold text-xl">About Me:</h1>
      <br />
      <p className="lg:text-lg font-light">
        I&apos;m a software engineer with specialty on the front-end. I&apos;ve
        been writing code for the past three years, and I&apos;m a final year
        Metallurgical Engineering student at{" "}
        <a
          href="https://www.knust.edu.gh/"
          className="text-primary-light dark:text-primary-dark"
        >
          KNUST
        </a>
        .
      </p>
      <br />
      <p className="lg:text-lg font-light">
        In my free time, I contribute to open-source projects like{" "}
        <a
          href="https://www.classroomio.com/"
          className="text-primary-light dark:text-primary-dark"
        >
          ClassroomIO
        </a>
        , or work on my personal projects.
      </p>
    </GridContainer>
  );
}

export default About;
