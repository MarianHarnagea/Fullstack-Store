import React from "react";
import Header from "../../components/headers/Header";
import "./contactus.scss";

const ContactUs = () => {
  return (
    <div className="contactus-container my-5">
      <Header title="Contact Us" />
      <div className="row py-3">
        <div className="col-12 col-md-6 col-xl-5">
          <p className="lead contact-text">
            Our story began in 2001 in a small studio in the middle of nowhere.
            With only one desk and next to no free time, our brand was born. Our
            passion for unique design and collaboration brought our vision, and
            products, to life.
          </p>
          <p className="lead contact-text mb-5 mb-md-0">
            Our products bring together the finest materials and stunning design
            to create something very special. We believe in quality, care, and
            creating unique products that everyone can enjoy. Colorful,
            creative, and inspired by what we see everyday, each product
            represents what we love about the world we live in. We hope they’ll
            inspire you too.
          </p>
        </div>
        <div className="col-12 col-md-6 col-xl-5 offset-xl-2 form-container">
          <form>
            <p className="text-muted">
              Do you have a question? A suggestion? Feel free to contact us and
              we will be happy to help you!
            </p>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send My Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
