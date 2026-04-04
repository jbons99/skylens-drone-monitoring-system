import React, { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch("http://localhost:5000/history");

      if (!response.ok) {
        throw new Error("Failed to fetch history");
      }

      const data = await response.json();
      setHistory(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading history...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detection History</h1>

      {history.length === 0 ? (
        <p>No uploads found yet.</p>
      ) : (
        <div>
          {history.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px"
              }}
            >
              <h3>Upload {index + 1}</h3>
              <p><strong>Total objects:</strong> {item.total_objects}</p>

              <div>
                <strong>Counts:</strong>
                <ul>
                  {Object.entries(item.counts || {}).map(([name, count]) => (
                    <li key={name}>
                      {name}: {count}
                    </li>
                  ))}
                </ul>
              </div>

              {item.annotated_image && (
                <img
                  src={`http://localhost:5000${item.annotated_image}`}
                  alt="Annotated result"
                  style={{ width: "300px", marginTop: "10px", borderRadius: "8px" }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;