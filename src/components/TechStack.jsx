import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function TechStack() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-24 text-center text-4xl"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants} className="p-4">
          <TbBrandHtml5 className="text-7xl text-green-500" />
        </motion.div>

        <motion.div variants={iconVariants} className="p-4">
          <TbBrandCss3 className="text-7xl text-red-500" />
        </motion.div>

        <motion.div variants={iconVariants} className="p-4">
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div variants={iconVariants} className="p-4">
          <RiReactjsLine className="text-7xl text-sky-500" />
        </motion.div>

        <motion.div variants={iconVariants} className="p-4">
          <TbBrandTailwind className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div variants={iconVariants} className="p-4">
          <FaNode className="text-7xl text-red-500" />
        </motion.div>

        <motion.div variants={iconVariants} className="p-4">
          <SiMysql className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TechStack;
