const TermsAndConditions = ({ formData, handleChange }) => {
  return (
    <div className="terms">
      <input
        type="checkbox"
        id="agree"
        name="agree"
        className="custom-checkbox"
        checked={formData.agree}
        onChange={handleChange}
        required
        aria-label="Agree to terms and conditions"
      />
      <label htmlFor="agree">
        I agree to the <a href="#!">terms & conditions</a>
      </label>
    </div>
  );
};

export default TermsAndConditions;
