import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search(props) {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <FormStyle onSubmit={submitHandler} onlyVeggie={props.onlyVeggie}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What would you like to eat?"
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  position: relative;
  padding: 2rem 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0;

  div {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    transition:0.3s;
    color:${props => props.onlyVeggie? "var(--green)": "var(--gray)"};
    border: none;
    background-color: var(--white);
    text-indent: 2rem;
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 500px) {
    input::placeholder{
      font-size: 1rem;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    transition:0.3s;
    color:${props => props.onlyVeggie? "var(--green)": "var(--gray)"};
  }
`;

export default Search;
