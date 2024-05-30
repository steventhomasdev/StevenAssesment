import { gst } from "../data/cardData";

const OrderSummary = ({ miles, cost }) => {
  return (
    <div className="order-summary">
      <h2>Order summary</h2>
      <hr />
      <p>
        Total miles: <span aria-label={`${miles} miles`}>{miles}</span>
      </p>
      <p>
        GST/HST: <span aria-label={`$${gst.toFixed(2)}`}>${gst.toFixed(2)}</span>
      </p>
      <hr />
      <p>
        Total cost: <span aria-label={`$${(cost + gst).toFixed(2)}`}>${(cost + gst).toFixed(2)}</span>
      </p>
    </div>
  );
};

export default OrderSummary;
