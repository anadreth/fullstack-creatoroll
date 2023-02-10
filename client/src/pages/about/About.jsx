import React from "react";
import { motion } from "framer-motion";
import { NavBar, Footer } from "./../../components/index";

function About() {
  return (
    <motion.div
      className=""
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <NavBar contact={false} />
      <motion.h1
        className={`font-seasons rotate absolute top-1/2 -translate-y-[78%] left-1/2 -translate-x-[50%] text-red opacity-10 lg:text-[250px] md:text-[150px] text-9xl`}
        animate={{ opacity: [0, 0.1] }}
      >
        ABOUT
      </motion.h1>
      <div className="flex justify-center items-center w-screen h-screen bg-light z-100">
        <div className="">
          <h1 className="font-seasons text-orange tracking-widest text-5xl">
            ABOUT US
          </h1>
          <p className="font-seasons text-orange">Sparking imagination...</p>
        </div>
      </div>
      <div className="bg-red text-light w-screen h-screen flex justify-center items-center">
        <div className="p-3 w-3/4">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            A lot of information about this site. A lot of information about
            this site A lot of information about this site A lot of information
            about this site A lot of information about this site A lot of
            information about this site A lot of information about this site A
            lot of information about this site A lot of information about this
            site A lot of information about this site A lot of information about
            this site A lot of information about this site A lot of information
            about this site A lot of information about this site A lot of
            information about this site A lot of information about this site
          </motion.p>
        </div>
      </div>
      <Footer color={true} />
    </motion.div>
  );
}

export default About;
