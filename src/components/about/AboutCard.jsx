import React from "react";
import { motion } from "framer-motion";

const AboutDetails = ({ title, description }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Animated Title Block */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }} // animate once when 40% of component is in view
        className="bg-gray-200 p-6 border-l-8 border-orange-500 mb-2"
      >
        <h1 className="text-3xl font-bold text-sky-500">{title}</h1>
      </motion.div>

      {/* Animated Description */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-gray-800 py-3 mb-10"
      >
        <p className="leading-relaxed mb-4">{description}</p>
      </motion.div>
    </div>
  );
};

export default AboutDetails;
