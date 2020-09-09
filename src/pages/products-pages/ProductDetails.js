import React, { useState, useEffect } from "react";
import minus from "../../assets/product-details/minus.png";
import add from "../../assets/product-details/add.png";
import axios from "axios";

import "./collection.scss";
import Review from "../../components/products-page-components/Review";
import ReviewProduct from "../../components/products-page-components/ReviewProduct";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [tabs, setTabs] = useState({
    reviewsTab: true,
    returnsTab: false,
    shippingTab: false,
  });
  const [reviewFormVal, setReviewFormVal] = useState({
    title: "",
    name: "",
    body: "",
  });
  const [activeReviewForm, setActiveReviewForm] = useState(false);

  const id = match.params.id;

  // Fetch product
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((product) => {
        setProduct(product.data);
        setReviews(product.data.comments);
        setSliderImages(product.data.carousel_images);
      })

      .catch((err) => console.log(err));
  }, [id]);

  const handleExpandReviewForm = () => {
    setActiveReviewForm(!activeReviewForm);
  };

  const handleValues = (e) => {
    e.preventDefault();

    if (
      reviewFormVal.title !== "" &&
      reviewFormVal.name !== "" &&
      reviewFormVal.body !== ""
    ) {
      axios
        .put(`http://localhost:5000/products/comment/${id}`, reviewFormVal)
        .then((result) => {
          setReviewFormVal({
            title: "",
            name: "",
            body: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const ReviewsCount = () => {
    // let reviewCounter
    if (reviews.length === 0) {
      return <p>No reviews yet</p>;
    } else if (reviews.length === 1) {
      return <p>There is {reviews.length} review</p>;
    } else {
      return <p>There are {reviews.length} reviews</p>;
    }
  };

  const handleActiveTab = (e) => {
    let tab = e.target.innerHTML;
    if (tab === "reviews") {
      setTabs({
        ...tabs,
        reviewsTab: true,
        returnsTab: false,
        shippingTab: false,
      });
    } else if (tab === "returns") {
      setTabs({
        ...tabs,
        reviewsTab: false,
        returnsTab: true,
        shippingTab: false,
      });
    } else if (tab === "shipping") {
      setTabs({
        ...tabs,
        reviewsTab: false,
        returnsTab: false,
        shippingTab: true,
      });
    }
  };

  const imageSlider = (
    <AwesomeSlider>
      {sliderImages.map((image) => {
        return <div key={image._id} data-src={image.image} />;
      })}
    </AwesomeSlider>
  );

  return (
    <div className="collection pb-5">
      <div className="product-details">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="product-meta d-md-none text-center">
              <p>Master & Dynamic</p>
              <h1>{product.title}</h1>
              <h2>$ {product.price}</h2>
            </div>
            <div className="product-image py-3">{imageSlider}</div>
          </div>
          <div className="col-12 col-md-6">
            <div className="product-meta d-none d-md-flex flex-column">
              <p>Master & Dynamic</p>
              <h1>{product.title}</h1>
              <h2>$ {product.price}</h2>
            </div>

            <div className="quantity-container">
              <p>Quantity</p>
              <button>
                <img src={minus} alt="minus" />
              </button>
              <h4>1</h4>
              <button>
                <img src={add} alt="add" />
              </button>
            </div>

            <div className="add-to-cart-btn">
              <button>add to cart</button>
            </div>

            <div className="description-container">
              <h3>{product.description}</h3>
              <h3>description</h3>
            </div>

            <div className="share-container">
              <p>share</p>
            </div>

            <div className="product-tabs mt-5">
              <div className="tabs">
                <p
                  onClick={(e) => handleActiveTab(e)}
                  className={tabs.reviewsTab ? "active-tab" : ""}
                >
                  reviews
                </p>
                <p
                  onClick={(e) => handleActiveTab(e)}
                  className={tabs.returnsTab ? "active-tab" : ""}
                >
                  returns
                </p>
                <p
                  onClick={(e) => handleActiveTab(e)}
                  className={tabs.shippingTab ? "active-tab" : ""}
                >
                  shipping
                </p>
              </div>

              <div className="tab-content tab-content-active">
                <div
                  className={
                    tabs.reviewsTab
                      ? "tab-reviews tab tab-active"
                      : "tab-reviews tab"
                  }
                >
                  <ReviewsCount />

                  <button onClick={handleExpandReviewForm}>
                    write a review
                  </button>

                  <ReviewProduct
                    setReviewFormVal={setReviewFormVal}
                    reviewFormVal={reviewFormVal}
                    handleValues={handleValues}
                    activeReviewForm={activeReviewForm}
                  />
                  {reviews.map((review) =>
                    review ? <Review key={review._id} review={review} /> : null
                  )}
                </div>
                <div
                  className={
                    tabs.shippingTab
                      ? "tab-shipping tab tab-active"
                      : "tab-shipping tab"
                  }
                >
                  <h3 className="text-lead">
                    Business days are Monday-Friday ; Holidays, Saturday and
                    Sunday are not included in shipping days.
                  </h3>
                  <h3>
                    <span>Express shipping : </span>Delivery typically in one to
                    five business days.
                  </h3>
                  <h3>
                    <span>Standard shipping : </span>Delivery by the end of the
                    third business day after an order has shipped. For example,
                    if an order is placed Tuesday night and is processed/shipped
                    on Wednesday, it would arrive on Monday of the following
                    week.
                  </h3>
                </div>
                <div
                  className={
                    tabs.returnsTab
                      ? "tab-returns tab tab-active"
                      : "tab-returns tab"
                  }
                >
                  <h3>
                    Our policy lasts 30 days. If 30 days have gone by since your
                    purchase, unfortunately we can’t offer you a refund or
                    exchange.
                  </h3>
                  <h3>
                    To be eligible for a return, your item must be unused and in
                    the same condition that you received it. It must also be in
                    the original packaging.
                  </h3>
                  <h3>
                    Several types of goods are exempt from being returned.
                    Perishable goods such as food, flowers, newspapers or
                    magazines cannot be returned. We also do not accept products
                    that are intimate or sanitary goods, hazardous materials, or
                    flammable liquids or gases.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="specs-container py-4 px-3 px-lg-0 mt-3">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 py-3 text-center">
            <h4>Battery life</h4>
            <h5>
              Rechargeable Li-ion battery for your SoundDock Portable digital
              music system. Provides 16 hours of uninterrupted playing time.
            </h5>
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-3 text-center">
            <h4>Premium materials</h4>
            <h5>
              We are using grain leather on headband exterior surface and ear
              cup accents, soft lambskin on headband interior and ear pads.
            </h5>
          </div>
          <div className="col-12 col-lg-4 py-3 text-center">
            <h4>Complete package</h4>
            <h5>
              All our headphones are sold with a canvas headphone pouch, 1.25m
              standard cable, micro-USB, leather cable box and charging cable.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
