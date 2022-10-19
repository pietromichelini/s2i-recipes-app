import { useState } from "react";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import Footer from "./components/Footer";
import ToggleButton from "./components/ToggleButton";


function App() {
  const [onlyVeggie, setOnlyVeggie] = useState(false)
  function toggleOnlyVeggie() {
      setOnlyVeggie(!onlyVeggie)
      localStorage.clear()
  }

  return (
    <div className="App">
      <Router>
        <Nav style={onlyVeggie? {backgroundColor: `var(--green)`} :{backgroundColor:`var(--gray)`} }>
          <ToggleButton onlyVeggie={onlyVeggie} toggleOnlyVeggie={toggleOnlyVeggie}/>
          <div className="search-container"> 
            <Search onlyVeggie={onlyVeggie}/>
          </div>
          <Category onlyVeggie={onlyVeggie}/>
        </Nav>
        <Pages onlyVeggie={onlyVeggie}/>
        <Footer onlyVeggie={onlyVeggie}/>
      </Router>
    </div>
  );
}

const Nav = styled.div`
  transition: 0.5s;
  background-color:var(--green);
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  padding: 1.5rem 0 0 0;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .search-container{
	width: 95%;
	display: flex;
	flex-direction:row;
	justify-content: space-between;
	align-items: center;
}

  svg {
    font-size: 2rem;
  }
`;

export default App;
