import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import OverQuotaMsg from "../atoms/OverQuotaMsg";

function Cuisine(props) {
  let params = useParams();

  const normalUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${params.type}`;
  const veggie = `&diet=vegetarian`;
  const url = props.onlyVeggie ? `${normalUrl}${veggie}` : normalUrl;

  const { getCuisine, cuisine, overDailyQuota } = useFetch(
    url,
    `cuisine ${params.type}`
  );

  useEffect(() => {
    getCuisine();
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {overDailyQuota === true && (
        <OverQuotaMsg>
          <h2>
            Daily request limit to{" "}
            <a target="blank" href="https://spoonacular.com/food-api/">
              spoonacular API
            </a>{" "}
            has been reached <br />
            :/ <br /> <br /> Try again tomorrow ;-)
          </h2>
        </OverQuotaMsg>
      )}

      {cuisine.map((recipe) => {
        return <Card recipe={recipe} onlyVeggie={props.onlyVeggie} />;
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 0 2rem;

  @media (max-width: 865px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

export default Cuisine;
