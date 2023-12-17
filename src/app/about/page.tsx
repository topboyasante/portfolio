import React from "react";

function Page() {
  return (
    <section className="min-h-screen">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Yes. I&apos;m Nana Kwasi.
      </h1>
      <hr className="my-8 border-dashed border-[#121212] dark:border-[#404040]" />
      <section>
        <p className="lg:text-lg font-light">
          I&apos;m a software engineer with specialty on the front-end.
          I&apos;ve been writing code for the past three years, and I&apos;m a
          final year Metallurgical Engineering student at{" "}
          <a
            href="https://www.knust.edu.gh/"
            className="text-primary-light dark:text-primary-dark"
          >
            KNUST
          </a>
          .
        </p>
        <p className="lg:text-lg font-light">
          Currently, I&apos;m completing my internship as a Front-End Developer
          at{" "}
          <a href="#" className="text-primary-light dark:text-primary-dark">
            Axon Information Systems
          </a>
          .
        </p>
      </section>
    </section>
  );
}

export default Page;
