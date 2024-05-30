const BillingAddressForm = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="streetAddress">Street address</label>
      <input
        type="text"
        id="streetAddress"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleChange}
        required
        aria-label="Street address"
      />

      <label htmlFor="aptSuiteUnit">Apt, Suite, Unit Number (Optional)</label>
      <input
        type="text"
        id="aptSuiteUnit"
        name="aptSuiteUnit"
        value={formData.aptSuiteUnit}
        onChange={handleChange}
        aria-label="Apt, Suite, Unit Number"
      />

      <label htmlFor="cityTown">City / Town</label>
      <input
        type="text"
        id="cityTown"
        name="cityTown"
        value={formData.cityTown}
        onChange={handleChange}
        required
        aria-label="City or Town"
      />

      <label htmlFor="country">Country</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
        aria-label="Country"
      >
        <option value="">Select a country</option>
        <option value="canada">Canada</option>
      </select>

      <label htmlFor="stateProvince">State / Province</label>
      <select
        id="stateProvince"
        name="stateProvince"
        value={formData.stateProvince}
        onChange={handleChange}
        required
        aria-label="State or Province"
      >
        <option value="">Select a state or province</option>
        <option value="ON">Ontario</option>
      </select>

      <label htmlFor="zipPostalCode">Zip / Postal code</label>
      <input
        type="text"
        id="zipPostalCode"
        name="zipPostalCode"
        value={formData.zipPostalCode}
        onChange={handleChange}
        required
        aria-label="Zip or Postal code"
      />

      <label htmlFor="phoneNumber">Phone number</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        aria-label="Phone number"
      />

      <label htmlFor="emailReceipt">Email receipt to</label>
      <input
        type="email"
        id="emailReceipt"
        name="emailReceipt"
        value={formData.emailReceipt}
        onChange={handleChange}
        required
        aria-label="Email receipt"
      />
    </>
  );
};

export default BillingAddressForm;
