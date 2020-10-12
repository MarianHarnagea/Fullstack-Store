import React, { useState } from "react";
import "./checkout.scss";
import Cart from "./Cart";
import PersonalInformations from "./PersonalInformations";
import Confirm from "./ConfirmInfo";
import Success from "./Success";

import { useSelector, useDispatch } from "react-redux";
import { orderSuccesfull } from "../../store/actions/checkoutActions";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const dispatch = useDispatch();
  const completeOrder = () => {
    dispatch(orderSuccesfull(personalInfo, cart));
    setStep(4);
    setPersonalInfo({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    });
  };

  switch (step) {
    case 1:
      return <Cart setStep={setStep} cart={cart} />;
    case 2:
      return (
        <PersonalInformations
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          setStep={setStep}
        />
      );
    case 3:
      return (
        <Confirm
          setStep={setStep}
          cart={cart}
          personalInfo={personalInfo}
          completeOrder={completeOrder}
        />
      );
    case 4:
      return <Success setStep={setStep} />;
    default:
      break;
  }
};

export default Checkout;
