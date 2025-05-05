import React from "react";
import goldStar from "../assets/starImage/goldStar.svg";
import grayStar from "../assets/starImage/grayStar.svg";

function RatingStar({ rating }) {
  const renderStar = () => {
    const rateRound = Math.round(rating.rate);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          className="w-4"
          key={i}
          src={i <= rateRound ? goldStar : grayStar}
          alt="star"
        />
      );
    }
    return stars;
  };

  return <div className="flex">{renderStar()}</div>;
}

export default RatingStar;
