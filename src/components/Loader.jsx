import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleFinish = () => {
    setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[999999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="absolute flex flex-col items-center -translate-y-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src="https://rubycommercialcentre.com/images/logoicon.png"
              alt="Ruby Logo"
              className="w-24 h-24 object-contain mb-4"
            />
            <TypingText
              text="Ruby Commercial Center"
              delay={1.2}
              onComplete={handleFinish}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TypingText = ({ text, delay = 0, onComplete }) => {
  const [displayed, setDisplayed] = useState("");
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        setTextWidth(textRef.current.offsetWidth);
      });
      resizeObserver.observe(textRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!text) return;

    const chars = [...String(text)];
    let index = 0;
    let intervalId;

    const startTyping = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index < chars.length) {
          const nextChar = chars[index];
          if (typeof nextChar === "string") {
            setDisplayed((prev) => prev + nextChar);
          }
          index++;
        } else {
          clearInterval(intervalId);
          if (onComplete) onComplete();
        }
      }, 80);
    }, delay * 1000);

    return () => {
      clearTimeout(startTyping);
      clearInterval(intervalId);
    };
  }, [text, delay, onComplete]);

  return (
    <div className="flex flex-col items-center">
      <h1
        ref={textRef}
        className="text-3xl sm:text-4xl font-bold text-[#ff6600] tracking-wide"
      >
        {displayed}
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          |
        </motion.span>
      </h1>

      <motion.div
        className="h-[3px] bg-[#ff6600] rounded-full mt-3"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: delay + 0.4 }}
        style={{
          width: `${textWidth}px`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default Loader;
