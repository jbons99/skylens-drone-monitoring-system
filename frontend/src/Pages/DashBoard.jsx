import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout.jsx";
import StatCard from "../components/dashboard/StatCard.jsx";

function Dashboard() {
  return (
    <PageLayout title="Dashboard">
      <div className="stats-grid">
        <StatCard
          title="Total Uploads"
          value="12"
          description="Mock data"
        />
        <StatCard
          title="People Detected"
          value="187"
          description="Mock data"
        />
        <StatCard
          title="Vehicles Detected"
          value="54"
          description="Mock data"
        />
      </div>

      <div className="card">
        <h2>Quick Actions</h2>
        <div className="quick-links">
          <Link to="/upload" className="text-link">
            Go to Upload
          </Link>
          <Link to="/history" className="text-link">
            View History
          </Link>
        </div>
      </div>

      <div className="card">
        <h2>Analytics Preview</h2>
        <p>
          This is where your charts and trend visualisations can go later.
        </p>
      </div>
    </PageLayout>
  );
}

export default Dashboard;