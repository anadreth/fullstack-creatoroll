import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Error = ({ message }) => {
  return (
    <AnimatePresence>
      <motion.p
        layout
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.2 }}
      >
        {message.toString()}
      </motion.p>
    </AnimatePresence>
  );
};

export default Error;
