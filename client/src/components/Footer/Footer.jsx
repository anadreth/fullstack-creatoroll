import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Footer({ color }) {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <footer
        className={`p-3 mx-3 mt-3 ${
          color ? "bg-light text-red" : "bg-red text-light"
        } sm:p-6 font-poppins rounded-t-lg shadow-md`}
      >
        <div className="md:flex md:justify-between">
          <motion.div
            className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="">
              <h2 className={`mb-6 text-sm font-semibold uppercase`}>
                Resources
              </h2>
              <ul className="">
                <li className="mb-4">
                  <button
                    onClick={() => navigate("/")}
                    className="hover:underline"
                  >
                    CreatoRoll
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/about")}
                    className="hover:underline"
                  >
                    Documents
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="">
                <li className="mb-4">
                  <a
                    href="https://github.com/anadreth"
                    target="_blank"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/miroslav-vano/"
                    target="_blank"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="mb-6 text-sm font-semibold uppercase ">Legal</h2>
              <ul className="">
                <li className="mb-4">
                  <button
                    onClick={() => navigate("/about")}
                    className="hover:underline"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/about")}
                    className="hover:underline text-left"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <motion.div
          className="sm:flex sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <button
              onClick={() => navigate("/about")}
              className="hover:underline"
            >
              CreatoRoll™
            </button>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://github.com/anadreth" target="_blank">
              <button className="text-gray-500 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </button>
            </a>
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
}

export default Footer;
