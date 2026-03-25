import { NavLink } from "react-router-dom";

function Navbar() {
  const getClassName = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="navbar-brand">SkyLens</div>

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
        <NavLink to="/login" className={getClassName}>
          Login
        </NavLink>
        <NavLink to="/register" className={getClassName}>
          Register
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;