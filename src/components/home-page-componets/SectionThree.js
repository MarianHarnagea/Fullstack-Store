import React from "react";
import avatar1 from "../../assets/home-imgs/avatar_1.webp";
import avatar2 from "../../assets/home-imgs/avatar_2.webp";
import avatar3 from "../../assets/home-imgs/avatar_3.webp";

const SectionThree = () => {
  return (
    <div className="section-3">
      <h2 className="text-center testimonials-title">Testimonials</h2>
      <div className="row">
        <div className="col-12 col-md-4 py-5">
          <div className="testimonials">
            <div className="avatar">
              <img src={avatar1} alt="" />
            </div>
            <h4>Robert R.</h4>
            <p>
              I loved those headphones. Contrary to other headphones, those fit
              perfectly into my ears!
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 py-5">
          <div className="testimonials">
            <div className="avatar">
              <img src={avatar2} alt="" />
            </div>
            <h4>Susan W.</h4>
            <p>
              I've heard about Master&Dynamic from a friend, and I can't go back
              anymore.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 py-5">
          <div className="testimonials">
            <div className="avatar">
              <img src={avatar3} alt="" />
            </div>
            <h4>Mary U.</h4>
            <p>
              Wearing headphones for hours always felt painful for me... not
              with those!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
