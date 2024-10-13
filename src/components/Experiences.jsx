import { EXPERIENCES } from "../constants/index.js";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const experienceVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const techVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

function Experiences() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiences
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={experienceVariants}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <motion.p
                variants={experienceVariants}
                className="mb-2 text-2xl font-bold"
              >
                {experience.year}
              </motion.p>
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <motion.h3
                variants={experienceVariants}
                className="mb-2 font-bold"
              >
                {experience.role} -{" "}
                <span className="text-sm text-sky-500">
                  {experience.company}
                </span>
              </motion.h3>
              <motion.p
                variants={experienceVariants}
                className="mb-4 text-white"
              >
                {experience.description}
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    variants={techVariants}
                    className="mr-2 mt-4 rounded bg-sky-500 px-2 py-1 text-sm font-medium text-white"
                    key={index}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Experiences;
