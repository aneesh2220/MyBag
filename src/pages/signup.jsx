import { useState } from "react";
import "../styles/login.css";
import { auth, dataBase } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

let Signup = () => {
  let [usernameX, setusernameX] = useState("");
  let [passwordX, setPasswordX] = useState("");
  let [emailX, setEmailX] = useState("");

  let handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, emailX, passwordX);
      let user = auth.currentUser;
      console.log(user);

      if (user != null) {
        localStorage.setItem("userId", user.uid)
        setDoc(doc(dataBase, "Users", user.uid), {
          email: emailX,
          username: usernameX,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form action="submit" onSubmit={handleSignUp}>
      <div className="login-content">
        <input
          type="text"
          placeholder="username"
          value={usernameX}
          onChange={(e) => setusernameX(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={emailX}
          onChange={(e) => setEmailX(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={passwordX}
          onChange={(e) => setPasswordX(e.target.value)}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Signup;
