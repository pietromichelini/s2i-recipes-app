import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from "react";

function Home(props) {
  // url per veggie
  // funzione per popular
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie onlyVeggie={props.onlyVeggie} />
      <Popular onlyVeggie={props.onlyVeggie} />
    </motion.div>
  );
}

export default Home;
