function StatCard({ title, value, description }) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p className="stat-value">{value}</p>
      {description && <small>{description}</small>}
    </div>
  );
}

export default StatCard;