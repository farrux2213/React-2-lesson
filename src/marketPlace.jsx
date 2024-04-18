import React from "react";

const MarketPlace = (props) => {
  return (
    <div className="graphicDesign">
      <img className="cardJobImg" src={props.img} alt="" />
      <h3 className="cardJobTitle">{props.jobTitle}</h3>
      <p className="cardJobDetail">{props.jobDetail}</p>
    </div>
  );
};

export default MarketPlace;
