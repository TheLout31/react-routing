import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/main">Main Page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
