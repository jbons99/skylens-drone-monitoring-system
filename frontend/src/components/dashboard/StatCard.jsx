function StatCard({ tone = "blue", icon, title, value, change }) {
  return (
    <div className={`stat-card ${tone}`}>
      <div className={`stat-icon ${tone}`}>{icon}</div>
      <div className="stat-label">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-change">{change}</div>
    </div>
  );
}

export default StatCard;