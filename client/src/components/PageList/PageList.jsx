import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  CreateNewForm,
  SearchBar,
  Loading,
  SearchIcon,
  Error,
} from "./../index";
import Info from "./Info";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const PageList = ({
  type,
  getUrl,
  saveUrl,
  updateValue,
  title,
  iconList,
  error,
}) => {
  const pageCount = useSelector((state) => state.pageCount);
  const token = useSelector((state) => state.token);
  const [all, setAll] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [selected, setSelected] = useState("");
  const [info, setInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const url = "https://creato-roll-server.onrender.com";
  const current = useSelector((state) => state[type]);

  let naming;
  switch (type) {
    case "race":
      naming = "Race";
      break;
    case "charClass":
      naming = "Class";
      break;
    case "traits":
      naming = "Trait";
      break;
    case "equipment":
      naming = "Equipment";
      break;
  }

  const getAll = async () => {
    setLoading(true);
    setServerError(null);
    try {
      const allResponse = await fetch(url + getUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!allResponse.ok) {
        setServerError("Something went wrong.");
        return;
      }

      const response = await allResponse.json();
      setLoading(false);
      setAll(response);
    } catch (error) {
      setServerError("Something went wrong.");
    }
  };

  useEffect(() => {
    getAll();
  }, [pageCount]);

  const handleInfo = (e) => {
    setSelected(e.target.id);
    setInfo(true);
  };

  return (
    <LayoutGroup>
      <div className="h-3/4 flex flex-col justify-center items-center">
        <motion.div
          className="flex justify-between items-center w-80 m-3"
          layout
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.1 },
          }}
        >
          <h2 className="text-xl text-orange">{title}</h2>
          <button
            className="text-red"
            onClick={() =>
              showSearch ? setShowSearch(false) : setShowSearch(true)
            }
          >
            <SearchIcon />
          </button>
        </motion.div>
        <AnimatePresence>
          {showSearch && <SearchBar setSearchBar={setSearchBar} />}
        </AnimatePresence>

        <motion.div
          className="scrollbar-thin scrollbar-corner-red scrollbar-track-white scrollbar-thumb-red h-96 w-80 shadow-md bg-white rounded-lg overflow-scroll mb-3 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          layout
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.1 },
          }}
        >
          <ul>
            {!loading ? (
              all
                .filter(
                  (item) =>
                    item.title.toLowerCase().slice(0, searchBar.length) ===
                    searchBar.toLowerCase()
                )
                .map((item, index) => (
                  <motion.li
                    key={item.title}
                    animate={{ y: [-100, 0], opacity: [0, 1] }}
                    transition={{ delay: index / 10 }}
                  >
                    <input
                      checked={
                        current && current._id === item._id ? true : false
                      }
                      className="hidden peer"
                      onChange={updateValue}
                      type="radio"
                      name={type}
                      id={item._id}
                      value={JSON.stringify(item)}
                    />
                    <label
                      className="peer-checked:bg-dark rounded-lg transition-all shadow-md duration-150 m-3 flex justify-between items-center text-orange bg-light"
                      htmlFor={item._id}
                    >
                      <div className="flex justify-between items-center h-auto w-full px-3 py-2">
                        <img
                          src={item.iconPath}
                          className="aspect-square w-[35px] h-[40px] m-3"
                        />
                        <div className="w-1/2 flex justify-center items-center flex-col my-2">
                          <h3>{item.title}</h3>
                          <div className="w-32">
                            <p className="break-words text-red text-sm text-center">
                              {item.shortDescription}
                            </p>
                          </div>
                        </div>
                        <button
                          className="m-3 text-orange"
                          onClick={handleInfo}
                          id={item._id}
                        >
                          Info
                        </button>
                      </div>
                    </label>
                  </motion.li>
                ))
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <button
                  disabled
                  type="button"
                  className="w-44 p-3 mr-2 text-lg text-red bg-white inline-flex justify-center items-center"
                >
                  <Loading />
                </button>
              </div>
            )}
          </ul>
        </motion.div>
        <AnimatePresence>
          {info && <Info selected={selected} setInfo={setInfo} all={all} />}
        </AnimatePresence>

        {serverError && (
          <motion.div
            className="pb-3 px-3 text-red w-80 text-center"
            layout
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.1 },
            }}
          >
            <Error message={serverError} />
          </motion.div>
        )}

        {error ? (
          <motion.div
            className="pb-3 px-3 text-red w-80 text-center"
            layout
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.1 },
            }}
          >
            <Error message={`Your character must have a ${naming}`} />
          </motion.div>
        ) : (
          <motion.p
            className="pb-3 px-3 text-red w-80 text-center"
            layout
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.1 },
            }}
          >
            Not finding what you want? <br /> Try creating your own!
          </motion.p>
        )}

        <CreateNewForm
          getAll={getAll}
          fetchLink={url + saveUrl}
          type={type}
          iconList={iconList}
          naming={naming}
        />
      </div>
    </LayoutGroup>
  );
};

export default PageList;
