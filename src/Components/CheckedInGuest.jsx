import React, { useState } from "react";
import Nav from "./Nav";
import { GET_GUEST_BOOKED_ROOMS } from "../Qurries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";

const CheckedInGuest = ({ user, set_user }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Start with modal closed
  const [bookings, setBookings] = useState({});
  const { data, loading } = useQuery(GET_GUEST_BOOKED_ROOMS, {
    errorPolicy: "ignore",
  });

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen); // Toggle the modal state
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return date.toLocaleString("en-US", options).replace(",", "");
  };

  return (
    <div>
      <Nav user={user} />
      <h1>All Bookings</h1>
      <div className="">
        <table className="w-full border-collapse border border-slate-500">
          <thead>
            <tr className="bg-gray-400">
              <th className="text-center w-20 p-2">Room No.</th>
              <th className="text-center p-2">Guest Name</th>
              <th className="text-center p-2">Check-In</th>
              <th className="text-center p-2">Check-Out</th>
              <th className="text-center p-2">Booking id</th>
              <th className="text-center p-2">Total Guest</th>
              <th className="text-center p-2">Phone No</th>
              <th className="text-center p-2">Status</th>
              <th className="text-center p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.getBookings ? (
              data.getBookings.map((booking, index) => (
                <tr key={index} className="even:bg-white odd:bg-gray-200">
                  <td className="text-center p-2">{booking.roomNo}</td>
                  <td className="text-center p-2">{booking.guestName}</td>
                  <td className="text-center p-2">
                    {formatDate(booking.checkIn)}
                    {/* {booking.checkIn} */}
                  </td>
                  <td className="text-center p-2">
                    {formatDate(booking.checkOut)}
                    {/* {booking.checkOut} */}
                  </td>
                  <td className="text-center p-2">{booking.bookId}</td>
                  <td className="text-center p-2">{booking.numberOfGuest}</td>
                  <td className="text-center p-2">{booking.number}</td>
                  <td className="text-center p-2">{booking.status}</td>
                  <td className="text-center p-2 flex justify-evenly">
                    <IoMdCheckboxOutline className="cursor-pointer" />
                    <IoEyeSharp
                      className="cursor-pointer"
                      onClick={() => {
                        setBookings(booking);
                        toggleModal();
                      }}
                    />
                    <IoFastFood className="cursor-pointer" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center p-2">
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Conditional rendering of the modal */}
      {modalIsOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-[50%] h-[50%] relative">
            <div className="w-full h-[2vh]">
              <button
                className="absolute top-2 right-2 text-xl font-bold"
                onClick={toggleModal} // Fix: Pass the function reference
              >
                <IoMdCloseCircle />
              </button>
            </div>
            <div className="h-[90%] bg-gray-200">
              <div className="flex justify-between w-full bg-gray-400 p-2">
                <span>Room No : {bookings.roomNo}</span>
                <span>Booking ID: {bookings.bookId}</span>
              </div>
              <div>
                <div className="flex items-center w-[70%] justify-between p-2">
                  <span>Guest Name : {bookings.guestName}</span>
                  <div>{bookings.status}</div>
                </div>
                <div className="flex items-center w-[60%] justify-between p-2">
                  <div className="m-2">
                    <h2>ALL Guests ({bookings.numberOfGuest})</h2>
                    <div>
                      {bookings.all_guets &&
                        bookings.all_guets.map((info,i) => (
                          <div>
                            <pre>{i+1}. {info.name} | {info.age} Yr</pre>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between ">
                    <span className="m-1">Check-In: {formatDate(bookings.checkIn)}</span>
                    <span className="m-1">Check-In:  {formatDate(bookings.checkOut)}</span>
                  </div>
                </div>
                <div className="flex items-center w-full justify-between p-2">
                  <div className="m-2">
                    <h2>Address</h2>
                    <div>
                      <pre>, Mandla,Madhaya pradesh</pre>
                      <pre>Ph Number : 7000061754</pre>
                      <pre>email : somemail@gmail.com</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckedInGuest;
