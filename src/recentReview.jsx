import React from "react";
import yellowStar from "./assets/yellowStar.png";

const RecentReview = (props) => {
  return (
    <div className="genReview">
      <div className="reviewStar genNav">
        <img className="yellowStar" src={yellowStar} alt="" />
        <p className="reviewNum">5.0</p>
      </div>
      <p className="reviewDescript marketplaceDescript">
        “Starting a business and getting it off the ground is easy if you
        follow.”
      </p>
      <img className="maleReview" src={props.img} alt="" />
      <p className="whoseReview">Jhon Smith</p>
      <p className="jobPosition">CEO Of Heart Business</p>
    </div>
  );
};

export default RecentReview;
