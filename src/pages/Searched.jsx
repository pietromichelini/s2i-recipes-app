import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import OverQuotaMsg from "../atoms/OverQuotaMsg";

function Searched(props) {
  let params = useParams();

  const normalUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params.search}`;

  const veggie = `&diet=vegetarian`;

  const url = props.onlyVeggie ? `${normalUrl}${veggie}` : normalUrl;

  const { getSearched, searched, noMatch, overDailyQuota } = useFetch(
    url,
    params.search
  );

  useEffect(() => {
    getSearched();
  }, [params.search]);

  return (
    <Grid>
      {noMatch === true && <NoMatch>No matching results :/</NoMatch>}
      {overDailyQuota === true && (
        <OverQuotaMsg>
          <h2>
            Daily request limit to{" "}
            <a target="blank" href="https://spoonacular.com/food-api/">
              spoonacular API
            </a>{" "}
            has been reached :/ <br /> <br /> Try again tomorrow ;-)
          </h2>
        </OverQuotaMsg>
      )}
      {searched.map((recipe) => {
        return (
          <Link style={{ textDecoration: "none" }} to={`/recipe/${recipe.id}`}>
            <Card key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    transition: 0.5s;
    &:hover {
      transform: translateY(-0.8rem);
      box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
    }
  }

  h4 {
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem;
  }
  @media (max-width: 700px) {
    h4 {
      font-size: 1rem;
    }
  }
`;
const NoMatch = styled.div`
  margin: auto 0;
  height: 50vh;
  color: var(--red);
  font-weight: bolder;
  font-size: 2rem;
  text-align: center;
`;
export default Searched;
