// import React from "react";

const FlowerCard = (props) => {
  return (
    <div className="featureCard">
      <img className="greenStar" src={props.img} alt="" />
      <h2 className="featureTitle">{props.title}</h2>
      <p className="featureRev">{props.description}</p>
    </div>
  );
};

export default FlowerCard;
