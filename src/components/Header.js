import { useState } from "react";
import { APP_LOGO } from "../utils/constants/constants";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const status = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {status ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                setLoginStatus(loginStatus === "Login" ? "Logout" : "Login");
              }}
            >
              {loginStatus}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
