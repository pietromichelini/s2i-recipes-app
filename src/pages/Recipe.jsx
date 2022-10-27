import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Recipe() {
  let params = useParams();

  const [activeTab, setActiveTab] = useState("instructions");

  const url = `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`;

  const { getDetails, details, overDailyQuota } = useFetch(url, params.name);

  useEffect(() => {
    getDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="imageWrapper">
        <h2>{details?.title}</h2>
        <img src={details?.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {overDailyQuota === true && (
          <h2>
            Daily request limit to{" "}
            <a target="blank" href="https://spoonacular.com/food-api/">
              spoonacular API
            </a>{" "}
            has been reached :/ <br /> <br /> Try again tomorrow ;-)
          </h2>
        )}

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details?.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details?.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details?.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 4rem;
  display: flex;
  color: var(--gray-800);

  .active {
    background: var(--purple);
    color: var(--gray-50);
  }

  p {
    color: var(--gray-800);
    line-height: 1.25rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }

  ul {
    margin-top: 2rem;
    color: var(--gray-800);
  }

  li {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;

    @media (max-width: 865px) {
      margin-left: 1rem;
    }
  }

  img {
    border-radius: 0.5rem;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.27);
  }

  @media (max-width: 1400px) {
    img {
      width: 450px;
    }
  }

  @media (max-width: 1120px) {
    img {
      width: 350px;
    }
  }

  @media (max-width: 865px) {
    flex-direction: column;

    img {
      width: 100%;
    }

    .imageWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  color: var(--purple);
  background: var(--white);
  border: 2px solid var(--purple);
  border-radius: 50px;
  margin-right: 2rem;
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--purple);
    color: var(--gray-50);
    color: var(--white);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  max-width: 100%;

  h2 {
    text-align: center;
    color: var(--red);
    margin: 1rem 0;
  }
  a {
    color: var(--red);
  }

  ul {
    margin-top: 0;
  }

  @media (max-width: 865px) {
    button {
      width: 100%;
    }
    margin-top: 2rem;
    margin-left: 0;
  }
`;

export default Recipe;
