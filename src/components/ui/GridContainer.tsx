"use client";
import React, { ReactNode, useEffect, useState } from "react";

type GridContainerProps = {
  sm_colspan: number;
  sm_rowspan: number;
  md_colspan: number;
  md_rowspan: number;
  children: ReactNode;
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
      className="bg-[#ffffff] dark:bg-[#121212] p-5 rounded-xl"
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
