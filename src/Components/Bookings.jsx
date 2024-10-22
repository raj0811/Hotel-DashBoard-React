import React from 'react'
import { GET_BOOKED_ROOMS } from '../Qurries'
import { useQuery } from '@apollo/client';
import Nav from './Nav';
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
const Bookings = ({ user, set_user }) => {

  
  const { data, loading } = useQuery(GET_BOOKED_ROOMS, {
    errorPolicy: "ignore",
  });
  return (
    <div>
      <Nav user={user} />
      <div className="flex justify-evenly">
        <div className="w-full">
          {data?.getBookedRooms ? (
            <div className="flex flex-wrap justify-evenly h-full w-full p-2 bg-slate-500">
              {data.getBookedRooms.map((info, index) => (
                <div className="bg-red-200 flex w-[45%] h-[10vh] justify-evenly rounded-lg m-2">
                  <div className="flex flex-col justify-evenly w-[25%]">
                    <div>Room No. 0{info.roomNo}</div>
                    <div className="uppercase">{info.roomType}</div>
                    <div className="flex items-center">
                      <IoPeopleOutline />{" "}
                      <span className="pl-2">
                        {info.capacity ? info.capacity : "NA"}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[30%] ">
                    <ul className="flex flex-col flex-wrap w-full justify-evenly h-full">
                      {info.facilities.map((data, index) => (
                        <li>{data}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <div>{info.status}</div>
                    {info.status !== "OCCUPIED" && (
                      <Link to={`/check-in/${info._id}`}>Book Now</Link>
                    )}
                    {info.status === "OCCUPIED" &&(
                      <button>Checkout</button>
                    )}
                    {/* <button onClick={setIsMenuOpen(!isMenueOpen)}>*</button> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No available rooms data</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookings