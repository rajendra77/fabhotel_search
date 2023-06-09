import { useRef, useEffect } from "react";
import React from 'react'
import { useDispatch } from "react-redux";
import { updateSuggestedHotels } from "../../../store/action/action";

const AutoComplete = ({handleChange}) => {
    
 const autoCompleteRef = useRef();
 const inputRef = useRef();
 const dispatch = useDispatch();

 const options = {
    componentRestrictions: { country: "IN" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
   };
   
  
 useEffect(() => {
  if (!window.google) {
     var s = document.createElement('script');
     s.type = 'text/javascript';
     s.src = `https://maps.google.com/maps/api/js?key=AIzaSyAEuBrth5voXhBLr5v2prYhZPB_rZZRq2I`;
     var x = document.getElementsByTagName('script')[0];
     x.parentNode.insertBefore(s, x);
     s.addEventListener('load', e => {
       this.onScriptLoad()
     })
   } else {
     onScriptLoad()
   }

 }, []);

 const onScriptLoad =() =>{
     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          options
         );
       
         autoCompleteRef.current.addListener("place_changed", async function () {
       
          const place = await autoCompleteRef.current.getPlace();
          console.log({place})
          dispatch(updateSuggestedHotels([]))
         });
 }

 return (
  <div className="searchbox">
       <input ref={inputRef} onChange = {handleChange}/>
  </div>
 );
};
export default AutoComplete;
