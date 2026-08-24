import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Manufacturers from "./pages/Manufacturers";
import Customers from "./pages/Customers";
import Utilities from "./pages/Utilities";
import Territories from "./pages/Territories";
import OrderDetails from "./pages/OrderDetails";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <header className="topbar">
          <Link to="/" className="brand">
            <div className="brand-name">POWER SERVICE AGENCY</div>
            <div className="brand-subtitle">Sales Tracker</div>
          </Link>

          <div className="user">Davis Jones</div>
        </header>

        <div className="main-layout">
          <aside className="sidebar">
            <nav>
              <div className="nav-section">
                <div className="nav-section-title">MAIN</div>

                <Link to="/" className="nav-item">
                  Dashboard
                </Link>

                <Link to="/orders" className="nav-item">
                  Orders
                </Link>

                <Link to="/reports" className="nav-item">
                  Reports
                </Link>
              </div>

              <div className="nav-section">
                <div className="nav-section-title">MANAGEMENT</div>

                <Link to="/manufacturers" className="nav-item">
                  Manufacturers
                </Link>

                <Link to="/customers" className="nav-item">
                  Customers
                </Link>

                <Link to="/utilities" className="nav-item">
                  Utilities
                </Link>

                <Link to="/territories" className="nav-item">
                  Territories
                </Link>
              </div>
            </nav>
          </aside>

          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route
                path="/orders/:orderId"
                element={<OrderDetails />}
              />
              <Route path="/reports" element={<Reports />} />
              <Route
                path="/manufacturers"
                element={<Manufacturers />}
              />
              <Route path="/customers" element={<Customers />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route path="/territories" element={<Territories />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;