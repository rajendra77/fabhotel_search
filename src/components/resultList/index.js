import React from "react";
import ListItem from "../listItem";

const ResultList = ({ resultType, dataList, icon }) => {
  return < div className="resultlistcontainer">
    <h3>{resultType}</h3>
    <ul className="resultlist">
      {dataList?.map((item, index) =>
        <ListItem
          key={index}
          item={item}
          icon={icon} />)}
    </ul>
  </div>
};

export default ResultList;