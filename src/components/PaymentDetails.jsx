import React, { useState } from "react";
import CardDetailsForm from "./form/CardDetailsForm";
import BillingAddressForm from "./form/BillingAddressForm";
import TermsAndConditions from "./form/TermsAndConditions";

const PaymentDetails = () => {
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    aptSuiteUnit: "",
    cityTown: "",
    country: "",
    stateProvince: "",
    zipPostalCode: "",
    phoneNumber: "",
    emailReceipt: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="payment-details">
      <h2>Payment details</h2>
      <p>
        We accept all major credit cards. Please ensure that you enter your
        details exactly as they appear on your credit card statement. All fields
        are required unless indicated.
      </p>
      <form onSubmit={handleSubmit}>
        <CardDetailsForm formData={formData} handleChange={handleChange}/>
        <h2>Billing address</h2>
        <BillingAddressForm formData={formData} handleChange={handleChange}/>
        <TermsAndConditions formData={formData} handleChange={handleChange}/>
        <button type="submit" className="buy-miles">
          Buy Miles
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
