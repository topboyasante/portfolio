"use client";
import { motion } from "framer-motion";
import { AiTwotoneFileZip } from "react-icons/ai";

function ResumeButton() {
  return (
    <motion.a
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      whileHover={{scale:1.1}}
      href="https://docs.google.com/document/d/1I8lAmB1oOnAa5HQC2TU3IDwcUTfED6a1/edit#heading=h.gjdgxs"
      target="_blank"
      className="fixed bottom-0 right-0 bg-primary-light text-white dark:bg-primary-dark dark:text-black rounded-full m-5 p-3 cursor-pointer"
    >
      <AiTwotoneFileZip size={25} />
    </motion.a>
  );
}

export default ResumeButton;
