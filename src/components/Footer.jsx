import React from 'react'
import styled from 'styled-components'

function Footer(props) {
  return (
    <FooterContainer onlyVeggie={props.onlyVeggie}>
        <p>Copyright © 2022 - Pietro Michelini</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
	transition:0.3s;
	background-color:${props=>props.onlyVeggie? "var(--green)": "var(--gray)"};
	bottom: 0;
	margin-top: 3rem;
	width: 100%;
	padding: 2rem 0;

 p{
	text-align:center;
	font-weight: 300;
	font-size:1.2rem;
}
`
export default Footer