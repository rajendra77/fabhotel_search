import React from "react";

const ListItem = ({name, address, slug}) => {

  return  <a className="listItem" href={`/hotel/${slug}`} target="_blank"> 
    <h4>{name}</h4>
    <p> {address}</p>
  </a>
};

export default ListItem;