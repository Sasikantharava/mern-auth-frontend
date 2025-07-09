import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css"; // Make sure this file exists
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://mern-auth-backend-8hou.onrender.com/api/auth/register", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "15px" }}>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>

    </div>
  );
}
