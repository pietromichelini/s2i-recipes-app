import styled from "styled-components";
import Switch from 'react-js-switch';


function ToggleButton(props) {

    return (
        <ToggleBtnContainer onlyVeggie={props.onlyVeggie}>
            <h2>Only Vegetarian</h2>
        <Switch 
        borderColor={{on: 'green', off: '#e6e6e6' }} 
        backgroundColor={ {on: 'green', off: '#f9f9f9'} } 
        initialValue={false} 
        size={60} 
        value={props.onlyVeggie} 
        onChange={props.toggleOnlyVeggie} 
        /> 
        </ToggleBtnContainer>
    );
  }

  const ToggleBtnContainer = styled.div`
    margin: 0;
    display:flex;
    flex-wrap:nowrap;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    h2{
      text-transform:uppercase;
      color: var(--white);
      font-size:1.5rem;
      font-weight:1000;
      margin-right:1rem;
    }
    @media (max-width: 768px) {
    h2{
      font-size:1rem;
    }
  }
  `

  
  export default ToggleButton