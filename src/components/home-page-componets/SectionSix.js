import React from "react";
import featuredBlogImg from "../../assets/home-imgs/featured-blog.jpg";
import { Link } from "react-router-dom";

const SectionSix = () => {
  return (
    <div className="section-6">
      <h2 className="featured-blog-title">Our latest news</h2>
      <div className="featured-blog">
        <div className="row">
          <div className="col-sm-6 col-lg-5">
            <img src={featuredBlogImg} alt="featuredBlogImg" />
          </div>
          <div className="col-sm-6 col-lg-7 py-4 px-5">
            <h6>February 22, 2017</h6>

            <h5>Master & Dynamic x Headspace</h5>
            <p className="text-truncate">
              Travel inspires us. It takes us to new places and new spaces; it
              transports our minds, animates our spirits, and enlivens our
              senses. Creative Coordinates, our travel guide series, charts the
              world’s creative hotspots – places beaming with musical, artistic,
              cultural, and culinary inspiration.
            </p>
            <div className="read-more-link">
              <Link to="/blog">Continue reading</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
