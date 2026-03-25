import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard.jsx";
import InputField from "../components/common/InputField.jsx";
import Button from "../components/common/Button.jsx";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Login data:", formData);
    alert("Sign in clicked");
  }

  return (
    <div className="auth-page">
      <div className="auth-bg"></div>
      <div className="auth-grid"></div>

      <AuthCard
        title="Welcome back"
        subtitle="Sign in to your monitoring platform"
      >
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="operator@skylens.io"
            required
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••••"
            required
          />

          <Button text="SIGN IN →" type="submit" />
        </form>

        <p className="auth-footer">
          No account? <Link to="/register">Create one</Link>
        </p>
      </AuthCard>
    </div>
  );
}

export default Login;