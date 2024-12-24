import { useState } from "react";
import "../styles/login.css";
import { auth, dataBase } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

let Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userId", auth.currentUser.uid);
      navigate("/dashboard");

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form action="submit" onSubmit={handleLogin}>
      <div className="login-content">
        <input
          type="text"
          id="usernameX"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          id="passwordX"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
