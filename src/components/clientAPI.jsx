import { useState } from "react";
import axios from "axios";

function useFetch(url, name) {

// states to store data fetched
  const [random, setRandom] = useState([])
  const [cuisine, setCuisine] = useState([])
  const [searched, setSearched] = useState([])
  const [details, setDetails] = useState()
  // state to notify the user when there are no matching results
  const [noMatch, setNoMatch] = useState(false)
  // state to notify the user when no more API calls are allowed
  const [overDailyQuota, setOverDailyQuota] = useState(false)

  // function to fetch info for Popular and Veggie
  const getRandom = async () => {

    const check = localStorage.getItem(name);

    if (check) {
      setRandom(JSON.parse(check));
    } else {
      setOverDailyQuota(false)
        axios.get(url)
        .then((response) => {
          setRandom(response.data.recipes)
          localStorage.setItem(name , JSON.stringify(response.data.recipes));
        })
          .catch((err) => {
            console.log(err);
            if(err.response.status === 402){
              setOverDailyQuota(true)
              console.log(err)
            }
          });
    }
  }
// function to fetch info for Cuisine
  const getCuisine = async () => {

    const check = localStorage.getItem(name);

    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      setOverDailyQuota(false)
      axios.get(url)
      .then((response) => {
        setCuisine(response.data.results)
        localStorage.setItem(name , JSON.stringify(response.data.results));
      })
        .catch((err) => {
          console.log(err);
          if(err.response.status === 402){
            setOverDailyQuota(true)
            console.log(err)
          }
        });
    }
  };
// function to fetch info for Searched
  const getSearched = async () => {

      setNoMatch(false)
      setOverDailyQuota(false)
      axios.get(url)
      .then((response) => {
        setSearched(response.data.results)
        if (response.data.results.length === 0){
          setNoMatch(true)
        }
      })
        .catch((err) => {
          console.log(err.response.status)
          if(err.response.status === 402){
            setOverDailyQuota(true)
            console.log(err)
          }
        });
	};
// function to fetch info for Recipe
  const getDetails = async () => {

    axios.get(url)
      .then((response) => {
        setDetails(response.data)
        // console.log(response.data)
      })
        .catch((err) => {
          console.log(err)
        });
  };

  return { getRandom, random, getCuisine, cuisine, getSearched, searched, getDetails, details, noMatch, overDailyQuota};
}

export default useFetch;