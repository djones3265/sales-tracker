function Dashboard() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Sales overview and order activity</p>
        </div>

        <button className="new-order-button">
          + New Order
        </button>
      </div>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">SALES THIS MONTH</div>
          <div className="stat-value">$0.00</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">OPEN ORDERS</div>
          <div className="stat-value">0</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">PENDING COMMISSION</div>
          <div className="stat-value">$0.00</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">UPCOMING DELIVERIES</div>
          <div className="stat-value">0</div>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <h2>Recent Orders</h2>
          </div>

          <div className="empty-state">
            <div className="empty-title">No orders yet</div>
            <div className="empty-description">
              Your sales orders will appear here once you begin
              entering them.
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Upcoming Deliveries</h2>
          </div>

          <div className="empty-state">
            <div className="empty-title">
              No upcoming deliveries
            </div>

            <div className="empty-description">
              Delivery information will appear here as orders are
              entered.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;