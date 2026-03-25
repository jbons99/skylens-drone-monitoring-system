import { NavLink } from "react-router-dom";

function Navbar() {
  const getClassName = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">🛰️</div>
        SKYLENS
      </div>

      <div className="navbar-links">
        <NavLink to="/dashboard" className={getClassName}>
          Dashboard
        </NavLink>
        <NavLink to="/upload" className={getClassName}>
          Upload
        </NavLink>
        <NavLink to="/history" className={getClassName}>
          History
        </NavLink>
      </div>

      <div className="navbar-user">
        <div className="user-avatar">JB</div>
        <span className="user-name">Jordan</span>
      </div>
    </nav>
  );
}

export default Navbar;