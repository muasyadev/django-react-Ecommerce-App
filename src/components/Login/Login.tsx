import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../pages/user/UserContext"; // Adjust the path as needed
import "./login.css";

interface LoginProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login = ({ setIsAuthenticated }: LoginProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");

  const { user, setUser } = useUser(); // Get both user and setUser from context

  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the entered credentials match the stored user data
    if (user && user.name === username && user.password === password) {
      console.log("Login successful");
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      console.log("Invalid username or password");
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store the new user's details in the context
    setUser({ name: newUsername, email, password: newPassword });
    setIsLogin(true);
    console.log("Signup successful", { newUsername, newPassword, email });
  };

  return (
    <>
      {isLogin ? (
        <div className="wrapper">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bxs-lock"></i>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="wrapper signup-form">
          <form onSubmit={handleSignupSubmit}>
            <h1>Sign up</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <i className="bx bxs-lock"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">
              Sign up
            </button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={() => setIsLogin(true)}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
