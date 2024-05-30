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
        <label>Cardholder name</label>
        <input type="text" required />

        <label>Card number</label>
        <input type="text" required />

        <div className="expiry-cvv">
          <div>
            <label>Expiration date</label>
            <input type="text" placeholder="MMYY" required />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" required />
          </div>
        </div>

        <h2>Billing address</h2>

        <label>Street address</label>
        <input type="text" required />

        <label>Apt, Suite, Unit Number (Optional)</label>
        <input type="text" />

        <label>City / Town</label>
        <input type="text" required />

        <label>Country</label>
        <select required>
          <option value="">Select a country</option>
        </select>

        <label>State / Province</label>
        <select required>
          <option value="">Select a state or province</option>
        </select>

        <label>Zip / Postal code</label>
        <input type="text" required />

        <label>Phone number</label>
        <input type="text" required />

        <label>Email receipt to</label>
        <input type="email" required />

        <div className="terms">
        <input type="checkbox" id="agree" className="custom-checkbox" required />
          <label>
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
