"use client";
import React, { ReactNode, useEffect, useState } from "react";

type GridContainerProps = {
  sm_colspan: number;
  sm_rowspan: number;
  md_colspan: number;
  md_rowspan: number;
  children: ReactNode;
  padding: boolean;
};

function GridContainer({ ...props }: GridContainerProps) {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    // Check if window is defined (avoiding "window is not defined" issue in Next.js)
    if (typeof window !== "undefined") {
      setIsWideScreen(window.innerWidth >= 768);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section
      className={
        props.padding
          ? "bg-[#fcfafa] dark:bg-[#2a2a2a] px-5 py-8 rounded-xl"
          : "bg-[#fcfafa] dark:bg-[#2a2a2a] rounded-xl"
      }
      style={{
        gridColumn: `span ${props.sm_colspan}`,
        gridRow: `span ${props.sm_rowspan}`,
        ...(isWideScreen && {
          gridColumn: `span ${props.md_colspan}`,
          gridRow: `span ${props.md_rowspan}`,
        }),
      }}
    >
      {props.children}
    </section>
  );
}

export default GridContainer;
