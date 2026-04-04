import { Link } from "react-router-dom";
import PageLayout from "../layout/PageLayout.jsx";
import useAuth from "../../hooks/useAuth.js";

const chartData = [
  { people: 30, vehicles: 6 },
  { people: 45, vehicles: 10 },
  { people: 22, vehicles: 4 },
  { people: 60, vehicles: 14 },
  { people: 42, vehicles: 8 },
  { people: 38, vehicles: 9 },
  { people: 55, vehicles: 12 },
];

const recentDetections = [
  {
    id: 1,
    date: "2026-03-24",
    location: "Collaroy Beach",
    people: 42,
    vehicles: 8,
  },
  {
    id: 2,
    date: "2026-03-23",
    location: "Centennial Park",
    people: 18,
    vehicles: 3,
  },
];

function Dashboard() {
  const { user } = useAuth();
  const maxPeople = Math.max(...chartData.map((item) => item.people));
  const totalPeople = chartData.reduce((sum, item) => sum + item.people, 0);
  const totalVehicles = chartData.reduce((sum, item) => sum + item.vehicles, 0);

  return (
    <PageLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Monitoring Overview</h1>
          <div className="page-meta">
            {user?.company || "SkyLens Operations"} · Last updated: 25 Mar 2026
            · 11:02 PM AEST
          </div>
        </div>

        <div className="badge">
          <span className="badge-dot"></span>
          SYSTEM ACTIVE
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-icon blue">P</div>
          <div className="stat-label">People Detected</div>
          <div className="stat-value">{totalPeople}</div>
          <div className="stat-change">+12% from last week</div>
        </div>

        <div className="stat-card purple">
          <div className="stat-icon purple">V</div>
          <div className="stat-label">Vehicles Detected</div>
          <div className="stat-value">{totalVehicles}</div>
          <div className="stat-change">+8% from last week</div>
        </div>

        <div className="stat-card green">
          <div className="stat-icon green">M</div>
          <div className="stat-label">Mission Status</div>
          <div className="stat-value">24</div>
          <div className="stat-change">All active regions healthy</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title">Quick Actions</div>

          <div className="quick-links">
            <Link to="/upload" className="quick-link-item">
              <div className="quick-link-icon upload">UP</div>
              <div>
                <div className="quick-link-label">New Upload</div>
                <div className="quick-link-sub">Process a drone image</div>
              </div>
            </Link>

            <Link to="/history" className="quick-link-item">
              <div className="quick-link-icon history">HS</div>
              <div>
                <div className="quick-link-label">Detection History</div>
                <div className="quick-link-sub">Browse past results</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            7-Day Activity
            <span className="chart-title-note">PEOPLE / VEHICLES</span>
          </div>

          <div className="chart-area">
            {chartData.map((item, index) => (
              <div key={index} className="chart-col">
                <div className="chart-pair">
                  <div
                    className="bar people"
                    style={{ height: `${(item.people / maxPeople) * 80}%` }}
                  ></div>
                  <div
                    className="bar vehicles"
                    style={{ height: `${(item.vehicles / maxPeople) * 80}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="chart-legend">
            <span className="legend-people">People</span>
            <span className="legend-vehicles">Vehicles</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Recent Detections</div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>People</th>
              <th>Vehicles</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentDetections.map((item) => (
              <tr key={item.id}>
                <td className="td-date">{item.date}</td>
                <td className="td-location">{item.location}</td>
                <td className="td-num td-people">{item.people}</td>
                <td className="td-num td-vehicles">{item.vehicles}</td>
                <td>
                  <span className="status-chip">PROCESSED</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
