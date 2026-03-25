import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard.jsx";
import InputField from "../components/common/InputField.jsx";
import Button from "../components/common/Button.jsx";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register data:", formData);
    alert("Create account clicked");
  }

  return (
    <div className="auth-page">
      <div className="auth-bg"></div>
      <div className="auth-grid"></div>

      <AuthCard
        title="Create account"
        subtitle="Join the SkyLens monitoring network"
      >
        <form onSubmit={handleSubmit}>
          <InputField
            label="Full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

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
            placeholder="Create a strong password"
            required
          />

          <InputField
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            required
          />

          <Button text="CREATE ACCOUNT →" type="submit" />
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </AuthCard>
    </div>
  );
}

export default Register;