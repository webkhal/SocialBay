import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.length < 5) {
      setUsernameError("Username must be at least 5 characters long.");
    } else {
      setUsernameError("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameError || username.length < 5) {
      alert("Please fix the errors before submitting.");
      return;
    }
    console.log("Logging in with:", { username, password, rememberMe });
    navigate("/dashboard");
  };

  return (
    <div className="p-d-flex p-ai-center p-jc-center p-min-vh-100 login-container">
      <div
        className="p-card p-p-4 p-shadow-3 p-border-round"
        style={{ width: "30rem" }}
      >
        <div className="p-text-center p-mb-4">
          <img
            src="/path-to-your-logo.png"
            alt="Company Logo"
            style={{ height: "80px", marginBottom: "1rem" }}
          />
          <h2>Welcome Back!</h2>
          <p>Please login to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="p-fluid p-mb-3">
            <label htmlFor="username" className="p-d-block p-mb-2">
              Username
            </label>
            <InputText
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
              required
            />
            {usernameError && (
              <small className="p-error">{usernameError}</small>
            )}
          </div>

          <div className="p-fluid p-mb-3">
            <label htmlFor="password" className="p-d-block p-mb-2">
              Password
            </label>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="p-d-flex p-ai-center p-jc-between p-mb-4">
            <div className="p-field-checkbox">
              <Checkbox
                inputId="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.checked)}
              />
              <label htmlFor="rememberMe" className="p-ml-2">
                Remember Me
              </label>
            </div>
            <Link to="/forgot-password" className="p-text-secondary">
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            label="Log In"
            icon="pi pi-sign-in"
            className="p-button-rounded p-button-primary p-py-2"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
