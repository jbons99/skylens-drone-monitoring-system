import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="auth-page">
      <div className="auth-bg"></div>
      <div className="auth-grid"></div>

      <div className="auth-card auth-card-center">
        <div className="notfound-icon">🛰️</div>
        <div className="notfound-code">404</div>
        <div className="notfound-title">Page not found</div>
        <p className="auth-subtitle">
          This sector is outside our drone coverage area.
        </p>
        <Link to="/login" className="notfound-link">
          RETURN TO BASE →
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
