const PaymentDetails = () => {
  return (
    <div className="payment-details">
      <h2>Payment details</h2>
      <p>
        We accept all major credit cards. Please ensure that you enter your
        details exactly as they appear on your credit card statement. All fields
        are required unless is indicated.
      </p>
      <form>
        <label htmlFor="cardholderName">Cardholder name</label>
        <input type="text" id="cardholderName" name="cardholderName" required aria-label="Cardholder name" />

        <label htmlFor="cardNumber">Card number</label>
        <input type="text" id="cardNumber" name="cardNumber" required aria-label="Card number" />

        <div className="expiry-cvv">
          <div>
            <label htmlFor="expirationDate">Expiration date</label>
            <input type="text" id="expirationDate" name="expirationDate" placeholder="MMYY" required aria-label="Expiration date" />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required aria-label="CVV" />
          </div>
        </div>

        <h2>Billing address</h2>

        <label htmlFor="streetAddress">Street address</label>
        <input type="text" id="streetAddress" name="streetAddress" required aria-label="Street address" />

        <label htmlFor="aptSuiteUnit">Apt, Suite, Unit Number (Optional)</label>
        <input type="text" id="aptSuiteUnit" name="aptSuiteUnit" aria-label="Apt, Suite, Unit Number" />

        <label htmlFor="cityTown">City / Town</label>
        <input type="text" id="cityTown" name="cityTown" required aria-label="City or Town" />

        <label htmlFor="country">Country</label>
        <select id="country" name="country" required aria-label="Country">
          <option value="">Select a country</option>
        </select>

        <label htmlFor="stateProvince">State / Province</label>
        <select id="stateProvince" name="stateProvince" required aria-label="State or Province">
          <option value="">Select a state or province</option>
        </select>

        <label htmlFor="zipPostalCode">Zip / Postal code</label>
        <input type="text" id="zipPostalCode" name="zipPostalCode" required aria-label="Zip or Postal code" />

        <label htmlFor="phoneNumber">Phone number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" required aria-label="Phone number" />

        <label htmlFor="emailReceipt">Email receipt to</label>
        <input type="email" id="emailReceipt" name="emailReceipt" required aria-label="Email receipt" />

        <div className="terms">
          <input type="checkbox" id="agree" className="custom-checkbox" required aria-label="Agree to terms and conditions" />
          <label htmlFor="agree">
            I agree to the <a href="#!">terms & conditions</a>
          </label>
        </div>

        <button type="submit" className="buy-miles">
          Buy Miles
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
