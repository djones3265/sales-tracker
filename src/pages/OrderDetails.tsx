import { Link, useParams } from "react-router-dom";

function OrderDetails() {
  const { orderId } = useParams();

  return (
    <>
      <div className="page-header">
        <div>
          <Link to="/orders" className="back-link">
            ← Back to Orders
          </Link>

          <h1>Order Details</h1>
          <p>Viewing order #{orderId}</p>
        </div>
      </div>

      <section className="panel order-detail-placeholder">
        <h2>PO Details</h2>

        <p>
          This page will eventually contain the complete PO,
          line items, delivery information, commission details,
          status history, notes, and attachments.
        </p>
      </section>
    </>
  );
}

export default OrderDetails;