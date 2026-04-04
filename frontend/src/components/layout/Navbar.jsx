import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { logoutUser } from "../../Services/authService.js";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const getClassName = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const initials = user?.fullName
    ? user.fullName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("")
    : "SL";

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">SL</div>
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
        <div className="user-avatar">{initials}</div>
        <span className="user-name">{user?.fullName || "Guest"}</span>
        <button
          type="button"
          className="nav-link"
          onClick={async () => {
            await logoutUser();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
