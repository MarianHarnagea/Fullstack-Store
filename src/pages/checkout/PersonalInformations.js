import React, { useState } from "react";
import Header from "../../components/headers/Header";

import { useDispatch } from "react-redux";
import { getPersonalInfo } from "../../store/actions/checkoutActions";

const PersonalInformations = ({ setStep, setPersonalInfo, personalInfo }) => {
  const [warning, setWarning] = useState({
    msg: "Enter Your Shipping Informations",
    warning: false,
  });
  const dispatch = useDispatch();
  const checkInfo = () => {
    if (
      personalInfo.firstName === "" ||
      personalInfo.lastName === "" ||
      personalInfo.email === "" ||
      personalInfo.phoneNumber === "" ||
      personalInfo.address === "" ||
      personalInfo.city === "" ||
      personalInfo.postalCode === "" ||
      personalInfo.country === ""
    ) {
      setStep(2);
      setWarning({ ...warning, msg: "Enter All Fields", warning: true });
    } else {
      dispatch(getPersonalInfo(personalInfo));
      setStep(3);
      setWarning({
        ...warning,
        msg: "Enter Your Shipping Informations",
        warning: false,
      });
    }
  };

  return (
    <div className="checkout-page">
      <Header title="Shipping Informations" />

      <form className="personal-info">
        <div className="text-center">
          <h5 style={{ color: warning.warning ? "red" : "black" }}>
            {warning.msg}
          </h5>
        </div>
        <input
          type="text"
          placeholder="First Name"
          value={personalInfo.firstName}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, firstName: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={personalInfo.lastName}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, lastName: e.target.value })
          }
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={personalInfo.phoneNumber}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Address, Ex: Str. John Snow, Nr 25"
          value={personalInfo.address}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, address: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="City"
          value={personalInfo.city}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, city: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={personalInfo.postalCode}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, postalCode: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={personalInfo.country}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, country: e.target.value })
          }
          required
        />
      </form>
      <div className="checkout-btns">
        <button onClick={() => setStep(1)}>Back</button>
        <button onClick={() => checkInfo()}>Confirm Informations</button>
      </div>
    </div>
  );
};

export default PersonalInformations;
