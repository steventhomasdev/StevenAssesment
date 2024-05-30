const CardDetailsForm = () => {
  return (
    <>
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
    </>
  );
};

export default CardDetailsForm;
