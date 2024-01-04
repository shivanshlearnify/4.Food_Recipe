import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

import "./style.css";

const Header = () => {
  return (
    <div className="background">
      <div className="header">
        <div className="logo">SpiceSaga</div>
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
