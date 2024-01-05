import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

import "./style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
          SpiceSaga
        </div>
        <div className="right">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>
              <FaSearch />
            </li>
            <li>
              <CgProfile />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
