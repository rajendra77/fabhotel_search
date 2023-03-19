import React from "react";

const ListItem = ({item, icon}) => {

  return  <li className="listItem" > 
    {icon} 
    <h4>{item?.name}</h4>
    <p> {item?.address}</p>
  </li>
};

export default ListItem;