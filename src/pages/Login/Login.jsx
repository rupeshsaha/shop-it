import React, { useContext, useState } from "react";
import { useNavigate } from "react-router"; // if using React Router
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("mor_2314"); // default valid username
  const [password, setPassword] = useState("83r5^_"); // default valid password
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate();
  const {loggedInUser, setLoggedInUser} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true)
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      setLoggedInUser(data.token)      

      navigate("/"); 
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false)
      console.log(loggedInUser);      
    }
  };


  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h2>Login to ShopIt </h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
