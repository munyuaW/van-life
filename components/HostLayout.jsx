import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? activeLink : {})}>
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeLink : {})}>
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeLink : {})}>
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeLink : {})}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
