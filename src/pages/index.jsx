import React, {  } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResultList from "../components/ui/resultList";
import hotelDataJson from '../constant/hotelData.json';
import {
  updateSearchKeyword,
  updateSuggestedHotels,
} from "../store/action/action";
import AutoComplete from '../components/ui/autosuggest'
import home from "./index.css"

let timer

const Home = () => {

  const dispatch = useDispatch()
  const suggestedHotels = useSelector(state => state.suggestedHotels)
  const searchKeyword = useSelector(state => state.searchKeyword)

  const handleInputChange = (e) => {
    const value = e.target.value
    dispatch(updateSearchKeyword(value))
    if (value === '') {
      dispatch(updateSuggestedHotels([]))
    } else {
      debounce()
    }
  }

  const debounce = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      handleFilterSuggestedHotels()
    }, 300)
  }

  const handleFilterSuggestedHotels = () => {
    let array = hotelDataJson.hotelData
    const filteredSuggestions = array.filter(
      suggestion =>
        suggestion['address'].toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
    );
    dispatch(updateSuggestedHotels(filteredSuggestions))
  }

  const handleSelect = () => {
    dispatch(updateSuggestedHotels([]))
  }

  return (
    <div className="container">
      <h1>FABHOTEL AUTOSUGGEST</h1>

      <div className="main">

        <AutoComplete
          handleChange={handleInputChange}
          searchKeyword={searchKeyword}
          handleSelect={handleSelect} />
        <h2> Please search for any city</h2>
        <div>
          {suggestedHotels?.length>0 && <ResultList
            resultType="Hotels"
            dataList={suggestedHotels}
            />}
        </div>
      </div>
    </div>
  )

};

export default Home;