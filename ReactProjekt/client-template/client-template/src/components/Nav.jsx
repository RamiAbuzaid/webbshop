import React from "react";
import { Route, Link } from "react-router-dom";
import "././../App";

const navLinks = [
  {
    id: 1,
    title: "Products",
    to: "/",
  },
  {
    id: 2,
    title: "Admin",
    to: "/admin/manage-products",
  },
];

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        {navLinks.map((nav) => (
          <ul className="navlist" key={nav.id}>
            <li className="lista">
              <Link to={nav.to}>{nav.title}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </>
  );
};

export default Nav;
