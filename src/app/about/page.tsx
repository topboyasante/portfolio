import Experience from "@/components/homepage/Experience";
import React from "react";

function Page() {
  return (
    <section className="min-h-screen">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Yes. I&apos;m Nana Kwasi.
      </h1>
      <hr className="my-8 border-dashed border-[#121212] dark:border-[#404040]" />
      <section>
        <h3 className="text-[#777777]">About Me</h3>
        <p>Hey there!</p>
        <br />
        <p>
          I&apos;m Nana Kwasi Asante, a final-year Metallurgical Engineering
          student at{" "}
          <a
            href="https://www.knust.edu.gh/"
            className="text-primary-light dark:text-primary-dark"
          >
            KNUST
          </a>
          . Beyond my studies, I&apos;m a Software Engineer, currently
          focusing on Front-End Development and learning Backend Development.
        </p>
        <br />
        <p>
          I just wrapped up my internship as a Frontend Engineer at{" "}
          <a href="#" className="text-primary-light dark:text-primary-dark">
            Axon Information Systems
          </a>
          . During this exciting experience, I had the opportunity to contribute
          to diverse projects, including a{" "}
          <span className="border-b border-b-primary-light dark:border-b-primary-dark">
            Blood Bank Management System,
          </span>{" "}
          an{" "}
          <span className="border-b border-b-primary-light dark:border-b-primary-dark">
            Event Ticketing Application
          </span>
          , and several others.
        </p>
        <br />
        <p>
          I am also a member of the{" "}
          <a
            href="https://www.slightlytechie.com/"
            className="text-primary-light dark:text-primary-dark"
          >
            Slightly Techie Community
          </a>
          . I work with tons of skilled developers on various community projects
          like the{" "}
          <span className="border-b border-b-primary-light dark:border-b-primary-dark">
            Community&apos;s CRM Application
          </span>
          , a{" "}
          <span className="border-b border-b-primary-light dark:border-b-primary-dark">
            Laundry Web Application
          </span>
          , an{" "}
          <span className="border-b border-b-primary-light dark:border-b-primary-dark">
            OKR application
          </span>
          , and many more.
        </p>
      </section>
      <br />
      <br />
      <section>
        <h3 className="text-[#777777]">Experience</h3>
        <Experience />
      </section>
    </section>
  );
}

export default Page;
