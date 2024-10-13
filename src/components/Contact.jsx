import { CONTACT } from "../constants";
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

const itemVariants = {
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

function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t border-sky-500 pb-20"
    >
      <motion.h2
        variants={itemVariants}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="text-center tracking-tighter"
      >
        <motion.p variants={itemVariants} className="my-4">
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="#"
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
