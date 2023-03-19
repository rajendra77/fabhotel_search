import React from "react";
import ListItem from "../listItem";

const ResultList = ({ resultType, dataList, icon }) => {
  return <>
    <h3>{resultType}</h3>
    <ul className="resultlist">
      {dataList?.map((item, index) =>
        <ListItem
          key={index}
          item={item}
          icon={icon} />)}
    </ul>
  </>
};

export default ResultList;