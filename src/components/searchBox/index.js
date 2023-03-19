import React from "react";

const SearchBox = ({ value, handleInputChange }) => {

    return <div className="searchbox">
        <input
            value={value}
            onChange={handleInputChange}
            placeholder="Search Here" />
    </div>


};

export default SearchBox;