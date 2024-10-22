import React from "react";
import { Link, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Nav from "./Nav";
const Dashboard = ({ user, set_user }) => {
  if (!user) return <Navigate to="/login"></Navigate>;
  return (
    <div>
      <Nav user={user} />
      <div className="flex justify-center items-center h-screen">
        <div className="flex border-gray-500  w-[70%] h-[50%] flex-wrap justify-evenly items-center">
          <Link to="/avail-rooms" className="bg-blue-400 rounded-xl text-[2rem] h-[20%] w-[30%] flex justify-center items-center shadow-xl">
            CHECK IN
          </Link >
          <Link to="/guest-bookings"  className="bg-blue-400 rounded-xl text-[2rem] h-[20%] w-[30%]  flex justify-center items-center shadow-xl">
            Bookings
          </Link >
          <Link  to="/add-room" className="bg-blue-400 rounded-xl text-[2rem] h-[20%] w-[30%]  flex justify-center items-center shadow-xl">
            Admin
          </Link >
          <Link to="/room-service" className="bg-blue-400 rounded-xl text-[2rem] h-[20%] w-[30%]  flex justify-center items-center shadow-xl">
            Room Service
          </Link >
          <Link to="/dahsboard" className="bg-blue-400 rounded-xl text-[2rem] h-[20%] w-[30%]  flex justify-center items-center shadow-xl">
            Dashboard
          </Link >
          <Link to="/invoices" className="bg-blue-400 rounded-xl text-[2rem] h-[20%] w-[30%]  flex justify-center items-center shadow-xl">
            Invoices
          </Link >
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
