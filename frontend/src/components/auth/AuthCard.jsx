function AuthCard({ title, subtitle, children }) {
  return (
    <div className="auth-card">
      <h1>{title}</h1>
      {subtitle && <p className="auth-subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}

export default AuthCard;