import React from "react";
import { Link } from "react-router-dom";
import featuredImgBlack from "../../assets/home-imgs/MW65b.png";
import featuredImgWhite from "../../assets/home-imgs/MW65w.png";
import featuredImgBrown from "../../assets/home-imgs/MW65c.png";

const SectionFive = () => {
  return (
    <div className="section-5">
      <h2 className="featured-products-title">Featured products</h2>

      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/collection/all">
            <div className="featured-product">
              <img src={featuredImgBlack} alt="MW65b" />
              <div className="featured-product-text">
                <p>master & dynamix</p>
                <h3>MW60 Black</h3>
                <h4>$599.00</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/collection/all">
            <div className="featured-product">
              <img src={featuredImgWhite} alt="MW65b" />
              <div className="featured-product-text">
                <p>master & dynamix</p>
                <h3>MW60 white</h3>
                <h4>$499.00</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/collection/all">
            <div className="featured-product">
              <img src={featuredImgBrown} alt="MW65b" />
              <div className="featured-product-text">
                <p>master & dynamix</p>
                <h3>MW60 Brown</h3>
                <h4>$549.00</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
