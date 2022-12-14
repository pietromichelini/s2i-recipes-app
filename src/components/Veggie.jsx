// import { useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import RefreshButton from "../atoms/RefreshButton";
import OverQuotaMsg from "../atoms/OverQuotaMsg";

function Veggie(props) {
  const numberOfRandomRecipes = 9;

  const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${numberOfRandomRecipes}&tags=vegetarian`;

  const { veggie, handleClickVeg, overDailyQuota } = useFetch(url, "veggie");

  return (
    <div>
      <Wrapper onlyVeggie={props.onlyVeggie}>
        <div className="title-container">
          <h3>Our Vegetarian Picks</h3>
          <RefreshButton
            onlyVeggie={props.onlyVeggie}
            handleClick={handleClickVeg}
          />
        </div>
        {overDailyQuota === true && <OverQuotaMsg />}
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
            breakpoints: {
              1350: {
                perPage: 2,
              },
              865: {
                gap: "1rem",
              },
            },
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card recipe={recipe} onlyVeggie={props.onlyVeggie} />
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 0.4rem 0rem;
  .title-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 5rem;
  }
  h3 {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default Veggie;
