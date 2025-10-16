import React from "react";
import { motion } from "framer-motion";

// Parent container variant with staggerChildren
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between children animations
    },
  },
};

// Variants for each child element (heading, p, subheading)
const itemVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const TextContent = ({ heading, subheading, description }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center max-w-7xl mb-6 mt-4 rounded-xl mx-auto text-blue-500 px-6 sm:px-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold mb-5"
      >
        {heading}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-sm max-w-3xl max-[847px]:max-w-2xl md:text-base mx-auto"
      >
        {description}
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold mb-4 mt-5"
      >
        {subheading}
      </motion.h1>
    </motion.div>
  );
};

export default TextContent;
