import React, { useState } from "react";
import Nav from "./Nav";
import { GET_AVAIL_ROOMS, BOOK_SINGLE_ROOM } from "../Qurries";
import { useQuery } from "@apollo/client";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AvailRooms = ({ user, set_user }) => {
  const [roomNum, setRoomNum] = useState("");
  const [guestName, setguestName] = useState("");
  const [numberOfGuest, setnumberOfGuest] = useState(1);
  const [all_guets, setall_guets] = useState([]);
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState();
  const [checkIn, setcheckIn] = useState("");
  const [additionDate, setadditionDate] = useState("");
  const [additionalCharges, setadditionalCharges] = useState(0.0);
  const [advancePayment, setadvancePayment] = useState(0.0);
  const [advancePaymentMode, setadvancePaymentMode] = useState("");
  const [occuping_now, setoccuping_now] = useState(false);
  const [checkOut, setcheckOut] = useState("");

  const [isMenueOpen,setIsMenuOpen]=useState(false)

  const { data, loading } = useQuery(GET_AVAIL_ROOMS, {
    errorPolicy: "ignore",
  });

  console.log(data, "rooms");
  return (
    <div>
      <Nav user={user} />
      <div className="flex justify-evenly">
        <div className="">
          {data?.getAvailRooms ? (
            <div className="flex flex-wrap justify-evenly h-full w-full p-2 bg-slate-500">
              {data.getAvailRooms.map((info, index) => (
                <div className="bg-red-200 flex w-[45%] h-[10vh] justify-evenly rounded-lg m-2">
                  <div className="flex flex-col justify-evenly w-[25%]">
                    <div>Room No. {info.roomNo}</div>
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
};

export default AvailRooms;
