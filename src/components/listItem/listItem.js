import React from "react";
import { useDispatch } from "react-redux";
import { updateSearchKeyword, updateSuggestedHotels, updateSuggestedPlaces } from "../../store/action/action";
import './listItem.css'

const ListItem = ({item, icon}) => {

  const dispatch = useDispatch()

  const handleClick = () =>{
    dispatch(updateSearchKeyword(item.name +" " +item.address))
    dispatch(updateSuggestedPlaces([]))
    dispatch(updateSuggestedHotels([]))
  }

  return  <li className="listItem" onClick={handleClick}> 
    {icon} 
    <h4>{item.name}</h4>
    <p> {item.address}</p>
  </li>
};

export default ListItem;