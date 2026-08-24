import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-name">POWER SERVICE AGENCY</div>
          <div className="brand-subtitle">Sales Tracker</div>
        </div>

        <div className="user">
          Davis Jones
        </div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <nav>
            <div className="nav-section">
              <div className="nav-section-title">MAIN</div>

              <button className="nav-item active">
                Dashboard
              </button>

              <button className="nav-item">
                Orders
              </button>

              <button className="nav-item">
                Reports
              </button>
            </div>

            <div className="nav-section">
              <div className="nav-section-title">MANAGEMENT</div>

              <button className="nav-item">
                Manufacturers
              </button>

              <button className="nav-item">
                Customers
              </button>

              <button className="nav-item">
                Utilities
              </button>

              <button className="nav-item">
                Territories
              </button>
            </div>
          </nav>
        </aside>

        <main className="content">
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
                <button className="text-button">View All</button>
              </div>

              <div className="empty-state">
                <div className="empty-title">No orders yet</div>
                <div className="empty-description">
                  Your sales orders will appear here once you begin entering them.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>Upcoming Deliveries</h2>
              </div>

              <div className="empty-state">
                <div className="empty-title">No upcoming deliveries</div>
                <div className="empty-description">
                  Delivery information will appear here as orders are entered.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;