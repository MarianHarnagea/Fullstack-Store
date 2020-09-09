import React from "react";
import promotionImg from "../../assets/home-imgs/promotion.jpg";

const SectionFour = () => {
  return (
    <div className="section-4">
      <img src={promotionImg} alt="" />
      <div className="promotion-wrapper">
        <div className="promotion-text">
          <h2>“Simply put, there are no better headphones!”</h2>
          <h3>You will love them too!</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
