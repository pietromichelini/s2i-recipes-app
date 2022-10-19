import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <div>
                <CardContainer onlyVeggie={props.onlyVeggie}>
                  <Link to={`/recipe/${props.recipe.id}`}>
                    <p>{props.recipe.title}</p>
                    <img src={props.recipe.image} alt={props.recipe.title} />
                    <Gradient />
                  </Link>
                </CardContainer>
    </div>
  )
}

const CardContainer = styled.div`
  margin: 1.5rem 0 2rem 0;
  min-height: 25rem;
  border: 1px solid;
  border-color:${props => props.onlyVeggie? "var(--green)": "var(--gray)"};
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  &:hover{
    transform: translateY(-0.8rem);
    box-shadow: rgba(100, 100, 111, 0.8) 0px 8px 20px 0px;
    /* box-shadow: none|h-offset v-offset blur spread color */
  }

  
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  p {
    position: absolute;
    z-index: 10;
    left: 0;
    top:10%;
    color: var(--gray-50);
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 865px) {
    min-height: 10rem;
    p{
      font-size: 1rem;
    }
  }
`;

const Gradient = styled.div`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;


export default Card