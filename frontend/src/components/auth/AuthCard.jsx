function AuthCard({ title, subtitle, children }) {
  return (
    <div className="auth-card">
      <div className="auth-logo">
        <div className="auth-logo-mark">🛰️</div>
        <span className="auth-logo-text">SKYLENS</span>
      </div>

      <h1 className="auth-title">{title}</h1>
      {subtitle && <p className="auth-subtitle">{subtitle}</p>}

      {children}
    </div>
  );
}

export default AuthCard;