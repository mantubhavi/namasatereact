import { useState } from "react";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
