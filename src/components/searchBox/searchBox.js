import React from "react";
import { GoLocation } from "react-icons/go";
import './searchBox.css'

const SearchBox = ({ value, handleInputChange, handleKeyDown }) => {

    return <div className="searchbox">
       {/* <GoLocation /> */}
        <input
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search Here" />
    </div>


};

export default SearchBox;