const BillingAddressForm = () => {
  return (
    <>
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
    </>
  );
};

export default BillingAddressForm;
