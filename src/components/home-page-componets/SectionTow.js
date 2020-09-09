import React from "react";
import { Link } from "react-router-dom";

const SectionTow = () => {
  return (
    <div className="section-2">
      <h1 className="text-center collection-title">Collection</h1>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4 py-3">
          <Link to="/collection/earphones">
            <div className="collection">
              <div className="collection-image earphones">
                <div className="collection-hover">
                  <h2>Earphones</h2>
                  <p>
                    "Designed for decades of use". Master & Dynamic earphones
                    use only the finest materials to en...
                  </p>
                  <button>Discover Earphones</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 py-3">
          <Link to="/collection/headphones">
            <div className="collection">
              <div className="collection-image headphones">
                <div className="collection-hover">
                  <h2>Headphones</h2>
                  <p>
                    Master & Dynamic headphones are not only beautiful : they
                    use a noise-reducing technology tha...
                  </p>
                  <button>Discover Headphones</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 py-3 m-auto">
          <Link to="/collection/accessories">
            <div className="collection">
              <div className="collection-image accessories">
                <div className="collection-hover">
                  <h2>Accesories</h2>
                  <p>
                    Discover a large range of accessories for your headphones
                    and earphones. Designed for durability...
                  </p>
                  <button>Discover Accesories</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTow;
