const TermsAndConditions = () => {
  return (
    <div className="terms">
      <input type="checkbox" id="agree" className="custom-checkbox" required aria-label="Agree to terms and conditions" />
      <label htmlFor="agree">
        I agree to the <a href="#!">terms & conditions</a>
      </label>
    </div>
  );
};

export default TermsAndConditions;
