import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import {
  GiNoodles,
  GiCakeSlice,
  GiSausage,
  GiRiceCooker,
  GiIndianPalace,
  GiBowlOfRice,
  GiCheeseWedge,
} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Category(props) {
  return (
    <List>
      <Splide
        options={{
          perPage: 9,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
          breakpoints: {
            1320: {
              perPage: 7,
            },
            1000: {
              perPage: 5,
            },
            700: {
              perPage: 3,
              gap: "3rem",
            },
          },
        }}
      >
        <SplideSlide>
          <SLink to="/cuisine/Italian" onlyVeggie={props.onlyVeggie}>
            <FaPizzaSlice />
            <h4>Italian</h4>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to="/cuisine/French" onlyVeggie={props.onlyVeggie}>
            <GiCheeseWedge />
            <h4>French</h4>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to="/cuisine/British" onlyVeggie={props.onlyVeggie}>
            <GiCakeSlice />
            <h4>British</h4>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to="/cuisine/German" onlyVeggie={props.onlyVeggie}>
            <GiSausage />
            <h4>German</h4>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to="/cuisine/Spanish" onlyVeggie={props.onlyVeggie}>
            <GiRiceCooker />
            <h4>Spanish</h4>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to="/cuisine/American" onlyVeggie={props.onlyVeggie}>
            <FaHamburger />
            <h4>American</h4>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to="/cuisine/Indian" onlyVeggie={props.onlyVeggie}>
            <GiIndianPalace />
            <h4>Indian</h4>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to="/cuisine/Chinese" onlyVeggie={props.onlyVeggie}>
            <GiBowlOfRice />
            <h4>Chinese</h4>
          </SLink>
        </SplideSlide>

        <SplideSlide>
          <SLink to="/cuisine/Thai" onlyVeggie={props.onlyVeggie}>
            <GiNoodles />
            <h4>Thai</h4>
          </SLink>
        </SplideSlide>
      </Splide>
    </List>
  );
}

const List = styled.div`
  overflow-x: hidden;
  width: 100%;
  margin: 2rem 0;

  /* li{
    margin:auto !important;
  } */
  @media (max-width: 768px) {
    margin: 0.5rem 0 1rem 0;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 1rem 0 1rem 0;
  text-decoration: none;
  background-color: var(--white);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  transition: 0.5s;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 20px 7px;
  }

  h4 {
    /* color: var(--green); */
    transition: 0.3s;
    color: ${(props) => (props.onlyVeggie ? "var(--green)" : "var(--gray)")};
    font-size: 0.8rem;
  }

  svg {
    /* color: var(--green); */
    transition: 0.3s;
    color: ${(props) => (props.onlyVeggie ? "var(--green)" : "var(--gray)")};
    font-size: 1.5rem;
  }

  &.active {
    background-color: var(--azzurro);
    border: 1px solid white;

    svg {
      color: var(--white);
    }

    h4 {
      color: var(--white);
    }
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;

    h4 {
      font-size: 0.5rem;
    }
  }
`;
export default Category;
