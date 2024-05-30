import { gst } from "../data/cardData";

const OrderSummary = ({ miles, cost }) => {
  return (
    <div className="order-summary">
      <h2>Order summary</h2>
      <hr />
      <p>
        Total miles <span>{miles}</span>
      </p>
      <p>
        GST/HST <span>${gst.toFixed(2)}</span>
      </p>
      <hr />
      <p>
        Total cost <span>${(cost + gst).toFixed(2)}</span>
      </p>
    </div>
  );
};

export default OrderSummary;
