import React from "react";
import ListItem from "../listItem";

const ResultList = ({ resultType, dataList }) => {
  return < div className="resultlistcontainer">
    <h3>{resultType}</h3>
    <ul className="resultlist">
      {dataList?.map((item, index) =>
        <ListItem
          key={index}
          item={item}
          name = {item.name}
          address = {item.address}
          slug = {item.slug}

         />)}
    </ul>
  </div>
};

export default ResultList;