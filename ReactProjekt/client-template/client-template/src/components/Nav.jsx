import React from "react";
import { Route, Link } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    title: "Products",
    to: "/",
  },
 {
  id:2,
  title: "Admin",
  to:"/admin/manage-products"
 }
];

const Nav = () => {
  return (
    <nav>
      {navLinks.map((nav) => (
        <ul key={nav.id}>
          <li>
            <Link to={nav.to}>{nav.title}</Link>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default Nav;
