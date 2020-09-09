import React, { useState } from "react";
import Header from "../../components/headers/Header";
import "./faq.scss";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      name: "Do you ship worldwide?",
      faqContent:
        "Yes! We are shipping worldwide. Please note though that shipping rates may differ depending on your country.",
      expandContent: false,
    },
    {
      id: 2,
      name: "Where is my order?",
      faqContent:
        "You can track in real time your order once it has been shipped. The tracking number can be found in the order confirmation email you have received, or in your personal account.",
      expandContent: false,
    },
    {
      id: 3,
      name: "My order arrived damaged!",
      faqContent:
        "Unfortunately, while we put extra care in our packaging, that can happen. If that's the case, please contact us directly through our contact form. We will be happy to send you another product.",
      expandContent: false,
    },
  ]);

  const handleFAQDropdown = (faq) => {
    setFaqs(
      faqs.map((newFaq) => {
        if (newFaq.id === faq.id) {
          return { ...faq, expandContent: !faq.expandContent };
        }
        return newFaq;
      })
    );
  };

  const displayFaqs = faqs.map((faq) => {
    return (
      <div key={faq.id}>
        <li key={faq.id} onClick={() => handleFAQDropdown(faq)}>
          {faq.name}
        </li>

        <div
          className={
            faq.expandContent
              ? "drop-down-faq drop-down-active"
              : "drop-down-faq"
          }
        >
          <p className="text-muted">{faq.faqContent}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="faq-page-container">
      <Header title="Faq" />

      <div className="faq-page-content">
        <h1>Shipping & returns</h1>

        <ul>
          {displayFaqs}
          {/* <li onClick={handleFAQDropdown}>Do you ship worldwide?</li>
          <div
            className={
              activeFAQ ? "drop-down-faq drop-down-active" : "drop-down-faq"
            }
          >
            <p className="text-muted">
              Yes! We are shipping worldwide. Please note though that shipping
              rates may differ depending on your country.
            </p>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
