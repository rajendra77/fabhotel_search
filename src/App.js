import React from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./components/searchBox";
import ResultList from "./components/resultList";
import hotelDataJson from './constant/hotelData.json';
import { GoLocation } from "react-icons/go";
import { RiHotelLine } from 'react-icons/ri'
import {
  updateSearchKeyword,
  updateSuggestedHotels,
  updateSuggestedPlaces
} from "./store/action/action";

let timer

const App = () => {

  const dispatch = useDispatch()
  const suggestedPlaces = useSelector(state => state.suggestedPlaces)
  const suggestedHotels = useSelector(state => state.suggestedHotels)
  const searchKeyword = useSelector(state => state.searchKeyword)


  const handleInputChange = (e) => {
    const value = e.target.value
    dispatch(updateSearchKeyword(value))
    if (value === '') {
      dispatch(updateSuggestedPlaces([]))
      dispatch(updateSuggestedHotels([]))
    } else {
      debounce(value)
    }
  }

  const debounce = (value) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      getLocation(value)
    }, 200)
  }

  const getLocation = (keyword) => {
    const corsUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = `${corsUrl}https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${keyword}&types=establishment&key=AIzaSyAEuBrth5voXhBLr5v2prYhZPB_rZZRq2I`
    axios(apiUrl)
      .then(res => {
        const predictions = res.data.predictions
        const places = predictions.map(item => {
          let obj = {
            address: item.description?.split(",")?.slice(1)?.join(),
            name: item?.terms[0].value
          }
          return obj
        })
        dispatch(updateSuggestedPlaces(places))
        handleFilterSuggestedHotels()
      })
      .catch(err => {
        handleFilterSuggestedHotels()
        console.error(err)
      })
  }

  const handleFilterSuggestedHotels = () => {
    let array = hotelDataJson.hotelData
    const filteredSuggestions = array.filter(
      suggestion =>
        suggestion['name'].toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
    );
    dispatch(updateSuggestedHotels(filteredSuggestions))
  }

  return (
    <div className="container">
      <h1>FABHOTEL AUTOSUGGEST</h1>

      <SearchBox
        value={searchKeyword}
        handleInputChange={handleInputChange} />

      {suggestedPlaces?.length > 0 &&
        <ResultList
          resultType="Locations"
          dataList={suggestedPlaces}
          icon={<GoLocation />} />}

      {suggestedHotels?.length > 0 &&
        <ResultList
          resultType="Hotels"
          dataList={suggestedHotels}
          icon={<RiHotelLine />} />}
    </div>
  )

};

export default App;