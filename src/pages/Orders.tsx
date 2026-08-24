import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type OrderStatus =
  | "Purchase Made"
  | "Acknowledged"
  | "In Production"
  | "Shipping"
  | "Delivered"
  | "Canceled"
  | "Modified";

type Order = {
  id: number;
  poNumber: string;
  customer: string;
  utility: string;
  territory: string;
  manufacturer: string;
  partNumber: string;
  quantity: number;
  total: number;
  status: OrderStatus;
  orderDate: string;
  expectedDelivery: string;
};

const fakeOrders: Order[] = [
  {
    id: 1,
    poNumber: "PO-10231",
    customer: "Anixter",
    utility: "MLGW",
    territory: "West Tennessee",
    manufacturer: "Hastings",
    partNumber: "10-115",
    quantity: 10,
    total: 12400,
    status: "Delivered",
    orderDate: "2026-08-01",
    expectedDelivery: "2026-08-18",
  },
  {
    id: 2,
    poNumber: "PO-10232",
    customer: "Wesco",
    utility: "TVA",
    territory: "Middle Tennessee",
    manufacturer: "Meiden",
    partNumber: "VCB-69",
    quantity: 2,
    total: 42100,
    status: "Shipping",
    orderDate: "2026-08-05",
    expectedDelivery: "2026-08-29",
  },
  {
    id: 3,
    poNumber: "PO-10233",
    customer: "Irby",
    utility: "Nashville Electric Service",
    territory: "Middle Tennessee",
    manufacturer: "Salco",
    partNumber: "SL-430",
    quantity: 25,
    total: 31200,
    status: "In Production",
    orderDate: "2026-08-07",
    expectedDelivery: "2026-09-12",
  },
  {
    id: 4,
    poNumber: "PO-10234",
    customer: "Graybar",
    utility: "Memphis Light Gas & Water",
    territory: "West Tennessee",
    manufacturer: "Madi",
    partNumber: "M-220",
    quantity: 12,
    total: 8400,
    status: "Acknowledged",
    orderDate: "2026-08-09",
    expectedDelivery: "2026-09-05",
  },
  {
    id: 5,
    poNumber: "PO-10235",
    customer: "Anixter",
    utility: "Jackson Energy Authority",
    territory: "West Tennessee",
    manufacturer: "Plymouth Rubber",
    partNumber: "PR-600",
    quantity: 100,
    total: 6800,
    status: "Purchase Made",
    orderDate: "2026-08-12",
    expectedDelivery: "2026-09-15",
  },
  {
    id: 6,
    poNumber: "PO-10236",
    customer: "Wesco",
    utility: "Kentucky Utilities",
    territory: "West Kentucky",
    manufacturer: "Hughes Brothers",
    partNumber: "HB-410",
    quantity: 40,
    total: 19600,
    status: "Shipping",
    orderDate: "2026-08-14",
    expectedDelivery: "2026-08-27",
  },
  {
    id: 7,
    poNumber: "PO-10237",
    customer: "Irby",
    utility: "Jackson Energy Authority",
    territory: "West Tennessee",
    manufacturer: "American Polymer",
    partNumber: "APC-220",
    quantity: 8,
    total: 15400,
    status: "Canceled",
    orderDate: "2026-08-15",
    expectedDelivery: "2026-09-01",
  },
  {
    id: 8,
    poNumber: "PO-10238",
    customer: "Graybar",
    utility: "Clarksville Department of Electricity",
    territory: "Middle Tennessee",
    manufacturer: "Electriglass",
    partNumber: "EG-120",
    quantity: 15,
    total: 9200,
    status: "Modified",
    orderDate: "2026-08-17",
    expectedDelivery: "2026-09-08",
  },
];

const statuses = ["All", "Purchase Made", "Acknowledged", "In Production", "Shipping", "Delivered", "Canceled", "Modified"];

const manufacturers = [
  "All",
  "Hastings",
  "Meiden",
  "Salco",
  "Madi",
  "Plymouth Rubber",
  "Hughes Brothers",
  "American Polymer",
  "Electriglass",
];

const territories = [
  "All",
  "West Tennessee",
  "Middle Tennessee",
  "East Tennessee",
  "West Kentucky",
];

function Orders() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [manufacturerFilter, setManufacturerFilter] = useState("All");
  const [territoryFilter, setTerritoryFilter] = useState("All");

  const filteredOrders = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return fakeOrders.filter((order) => {
      const matchesSearch =
        searchText === "" ||
        order.poNumber.toLowerCase().includes(searchText) ||
        order.customer.toLowerCase().includes(searchText) ||
        order.utility.toLowerCase().includes(searchText) ||
        order.manufacturer.toLowerCase().includes(searchText) ||
        order.partNumber.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      const matchesManufacturer =
        manufacturerFilter === "All" ||
        order.manufacturer === manufacturerFilter;

      const matchesTerritory =
        territoryFilter === "All" ||
        order.territory === territoryFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesManufacturer &&
        matchesTerritory
      );
    });
  }, [search, statusFilter, manufacturerFilter, territoryFilter]);

  const totalSales = filteredOrders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>View and track all sales orders</p>
        </div>

        <button className="new-order-button">
          + New Order
        </button>
      </div>

      <section className="order-summary-grid">
        <div className="stat-card">
          <div className="stat-label">ORDERS SHOWN</div>
          <div className="stat-value">{filteredOrders.length}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">SALES SHOWN</div>
          <div className="stat-value">
            {formatCurrency(totalSales)}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">OPEN ORDERS</div>
          <div className="stat-value">
            {filteredOrders.filter(
              (order) =>
                order.status !== "Delivered" &&
                order.status !== "Canceled"
            ).length}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">DELIVERED</div>
          <div className="stat-value">
            {
              filteredOrders.filter(
                (order) => order.status === "Delivered"
              ).length
            }
          </div>
        </div>
      </section>

      <section className="orders-panel">
        <div className="orders-filters">
          <div className="search-wrapper">
            <label htmlFor="order-search">Search Orders</label>
            <input
              id="order-search"
              type="text"
              placeholder="PO, customer, utility, manufacturer, part number..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="status-filter">Status</label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="manufacturer-filter">
              Manufacturer
            </label>
            <select
              id="manufacturer-filter"
              value={manufacturerFilter}
              onChange={(event) =>
                setManufacturerFilter(event.target.value)
              }
            >
              {manufacturers.map((manufacturer) => (
                <option
                  key={manufacturer}
                  value={manufacturer}
                >
                  {manufacturer}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="territory-filter">Territory</label>
            <select
              id="territory-filter"
              value={territoryFilter}
              onChange={(event) =>
                setTerritoryFilter(event.target.value)
              }
            >
              {territories.map((territory) => (
                <option key={territory} value={territory}>
                  {territory}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>PO Number</th>
                <th>Customer</th>
                <th>Utility</th>
                <th>Manufacturer</th>
                <th>Territory</th>
                <th>Amount</th>
                <th>Expected Delivery</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="order-row">
                  <td>
                    <Link
                      to={`/orders/${order.id}`}
                      className="po-link"
                    >
                      {order.poNumber}
                    </Link>
                  </td>

                  <td>{order.customer}</td>
                  <td>{order.utility}</td>
                  <td>{order.manufacturer}</td>
                  <td>{order.territory}</td>

                  <td className="amount-cell">
                    {formatCurrency(order.total)}
                  </td>

                  <td>
                    {formatDate(order.expectedDelivery)}
                  </td>

                  <td>
                    <span
                      className={`status-badge status-${order.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="no-results">
              <div className="empty-title">
                No orders found
              </div>

              <div className="empty-description">
                Try changing your search or filters.
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

export default Orders;