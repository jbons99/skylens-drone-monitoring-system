import PageLayout from "../components/layout/PageLayout.jsx";
import Button from "../components/common/Button.jsx";

const detections = [
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
  {
    id: 3,
    date: "2026-03-22",
    location: "Main Road",
    people: 11,
    vehicles: 15,
  },
];

function History() {
  return (
    <PageLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Detection History</h1>
          <div className="page-meta">3 records · sorted by date</div>
        </div>

        <Button text="+ NEW UPLOAD" className="header-button" />
      </div>

      <div className="table-card">
        <div className="table-header">
          <span className="table-header-left">ALL DETECTIONS</span>
          <span className="table-header-right">3 results</span>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>People</th>
              <th>Vehicles</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {detections.map((item) => (
              <tr key={item.id}>
                <td className="td-date">{item.date}</td>
                <td className="td-location">{item.location}</td>
                <td className="td-num td-people">{item.people}</td>
                <td className="td-num td-vehicles">{item.vehicles}</td>
                <td>
                  <span className="status-chip">PROCESSED</span>
                </td>
                <td className="td-actions">
                  <button>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}

export default History;
