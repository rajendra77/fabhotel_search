import React from "react";
import ListItem from "../listItem/listItem";
import './resultList.css';

const ResultList = ({ resultType, dataList, icon }) => {
  return <>
    <h3>{resultType}</h3>
    <ul>
      {dataList?.map((item, index) =>
        <ListItem
          key={index}
          item={item}
          icon={icon} />)}
    </ul>
  </>
};

export default ResultList;