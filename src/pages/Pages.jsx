import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import GoBackButton from "../atoms/GoBackButton";
import styled from "styled-components";

function Pages(props) {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <PagesContainer>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onlyVeggie={props.onlyVeggie} />} />
          <Route
            path="/cuisine/:type"
            element={
              <>
                <GoBackButton />
                <Cuisine onlyVeggie={props.onlyVeggie} />
              </>
            }
          />
          <Route
            path="/searched/:search"
            element={
              <>
                <GoBackButton />
                <Searched onlyVeggie={props.onlyVeggie} />
              </>
            }
          />
          <Route
            path="/recipe/:name"
            element={
              <>
                <GoBackButton />
                <Recipe />
              </>
            }
          />
        </Routes>
      </PagesContainer>
    </AnimatePresence>
  );
}

const PagesContainer = styled.div`
  width: 90%;
  margin: auto;
`;

export default Pages;
