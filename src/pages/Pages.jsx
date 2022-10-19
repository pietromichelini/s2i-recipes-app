import React from 'react';
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';
import GoBack from '../components/GoBack';
import styled from 'styled-components';

function Pages(props) {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<PagesContainer>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home onlyVeggie={props.onlyVeggie} />} />
					<Route path="/cuisine/:type" 
					element={
						<>
					<GoBack/>
					<Cuisine onlyVeggie={props.onlyVeggie}/>
						</>
					} />
					<Route path="/searched/:search" 
					element={
						<>
					<GoBack/>
					<Searched onlyVeggie={props.onlyVeggie}/>
						</>
					} />
					<Route path="/recipe/:name" 
					element={
						<>
					<GoBack/>
					<Recipe />
						</>
					} />
				</Routes>
			</PagesContainer>
		</AnimatePresence>
	);
}

const PagesContainer = styled.div`
	width: 90%;
	margin: auto;
`

export default Pages;
