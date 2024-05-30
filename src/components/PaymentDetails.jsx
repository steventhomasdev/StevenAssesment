import React from 'react';
import CardDetailsForm from './form/CardDetailsForm';
import BillingAddressForm from './form/BillingAddressForm';
import TermsAndConditions from './form/TermsAndConditions';

const PaymentDetails = () => {
  return (
    <div className="payment-details">
      <h2>Payment details</h2>
      <p>
        We accept all major credit cards. Please ensure that you enter your
        details exactly as they appear on your credit card statement. All fields
        are required unless indicated.
      </p>
      <form>
        <CardDetailsForm />
        <h2>Billing address</h2>
        <BillingAddressForm />
        <TermsAndConditions />
        <button type="submit" className="buy-miles">
          Buy Miles
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
