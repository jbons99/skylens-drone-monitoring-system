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
    alert("Login form submitted");
    console.log("Login data:", formData);
  }

  return (
    <div className="auth-page">
      <AuthCard
        title="Login"
        subtitle="Sign in to your SkyLens account"
      >
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <Button text="Login" type="submit" />
        </form>

        <p className="auth-link-text">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </AuthCard>
    </div>
  );
}

export default Login;