import { useContext, useState } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const LoginPage = () => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const login = async () => {
    setErrorMsg("");
    try {
      await context.authenticate(userName, password);
      // If auth succeeds, isAuthenticated becomes true and Navigate will redirect
    } catch (err) {
      setErrorMsg(err?.message || "Login failed");
    }
  };

  const location = useLocation();

  // Redirect back to where user came from, else default to /tasks (more useful than "/")
  const from = location.state?.from?.pathname || "/tasks";

  if (context.isAuthenticated === true) {
    return <Navigate to={from} replace />;
  }

  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages</p>

      <input
        id="username"
        placeholder="user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />

      <input
        id="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={login}>Log in</button>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      <p>
        Not Registered? <Link to="/signup">Sign Up!</Link>
      </p>
    </>
  );
};

export default LoginPage; 