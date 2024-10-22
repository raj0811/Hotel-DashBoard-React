// Nav.js
import { Link, Routes, Route, Navigate, NavLink } from "react-router-dom";
import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Nav = ({ user }) => {
  if (!user) return <Navigate to="/login"></Navigate>;
 
  return (
    <div>
      <div className="h-[8vh] bg-blue-400 flex items-center justify-between">
        <span className="p-2">
          <Link to="/">{user.getUserData.hotelName}</Link>
        </span>
        <button className="p-4 text-lg pl-4">
          <RiLogoutBoxRLine />
        </button>
      </div>
    </div>
  );
};

export default Nav;
