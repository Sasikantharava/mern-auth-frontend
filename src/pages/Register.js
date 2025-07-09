import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css"; // Reuse the same CSS file
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://mern-auth-backend-8hou.onrender.com/api/auth/register", form);


      alert("Registered successfully: " + res.data.message);
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert("Registration failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Register</button>
      </form>
        <p style={{ marginTop: "15px" }}>
      Already have an account? <Link to="/login">Login here</Link>
    </p>
    </div>
  );
}
