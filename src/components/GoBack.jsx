import React from 'react'
import {FaChevronLeft} from 'react-icons/fa'
import { Link } from "react-router-dom";
import styled from 'styled-components';

function GoBack() {
  return (
    <GobackContainer>
        <Link to="/">
            <FaChevronLeft className='chevron-left'/>
        </Link>
    </GobackContainer>
  )
}

const GobackContainer = styled.div`
	position: absolute;
	top: 1.6rem;
	left: 1.5rem;
  .chevron-left{
	color: var(--white);
	font-size: xx-large;
}
@media (max-width: 768px) {
  .chevron-left{
	font-size: x-large;
}
  }
`
export default GoBack
