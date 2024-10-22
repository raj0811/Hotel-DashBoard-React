import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { BOOK_SINGLE_ROOM } from "../Qurries";
import { MdDeleteForever } from "react-icons/md";

import { toast } from "react-toastify";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import Nav from "./Nav";

const Checkin = ({ user }) => {
  const { roomid } = useParams();
  const [roomNum, setRoomNum] = useState("");
  const [guestName, setguestName] = useState("");
  const [guestAge, setguestAge] = useState(0);
  const [numberOfGuest, setnumberOfGuest] = useState(1);
  const [all_guets, setall_guets] = useState([]);
  const [all_guetsData, setall_guetsData] = useState([{}]);
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("address summy");
  const [checkIn, setcheckIn] = useState("");
  const [additionData, setadditionData] = useState("");
  const [additionalCharges, setadditionalCharges] = useState(0.0);
  const [additionalChargesName, setadditionalChargesName] = useState("");
  const [additonalChargesInfo, setAdditonalChargesInfo] = useState([]);
  const [advancePayment, setadvancePayment] = useState(0.0);
  const [advancePaymentMode, setadvancePaymentMode] = useState("");
  const [occuping_now, setoccuping_now] = useState(false);
  const [checkOut, setcheckOut] = useState("");
  const [totalGuest, settotalGuest] = useState("");
  const [additionalGuestName, setAdditionalGuestName] = useState("");
  const [additionalGuestAge, setAdditionalGuestAge] = useState(0);

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState(" ");
  const [countryID, setcountryId] = useState();
  const [stateID, setstateID] = useState();
  const [cityID, setcityID] = useState();

  const options = [
    { value: "CASH", label: "CASH" },
    { value: "UPI", label: "UPI" },
    { value: "CARD", label: "CARD" },
    { value: "OTHERS", label: "OTHERS" },
  ];

  useEffect(() => {
    if (guestName.trim() !== "") {
      const guestInfo = {
        name: guestName,
        age: guestAge,
      };
      setall_guetsData((prevGuests) => [guestInfo]);
      // setguestName(""); // Clear the guest name input after adding
    }
  }, [guestName, guestAge]);

  const [bookRoom] = useMutation(BOOK_SINGLE_ROOM);

  const addGuests = () => {
    console.log("dadas");
    console.log(totalGuest, "total");

    const guestInfo = {
      name: additionalGuestName,
      age: additionalGuestAge,
    };
    console.log({ totalGuest });

    if (additionalGuestName !== "") {
      console.log(numberOfGuest, "number of guest");
      console.log(all_guetsData.length, "toal guest now");

      console.log();

      if (all_guetsData.length > numberOfGuest) {
        console.log("cant be added");
        toast.error(`cant be added Total guest is ${numberOfGuest}`);
        return;
      }
      // Ensure facility is not empty
      console.log("add");
      setall_guetsData((prevGuest) => [...prevGuest, guestInfo]);
      // setFacilities([...facilities, facility]);
      setAdditionalGuestAge(0);
      setAdditionalGuestName(""); // Clear input after adding
      // settotalGuest(""); // Clear input after adding
    }
    setAdditionalGuestName(""); // Clear input after adding
    settotalGuest("");
  };

  const addCharges = () => {
    const charges = {
      name: additionalChargesName,
      charge: Number(additionalCharges),
    };

    if (additionalChargesName !== "") {
      setAdditonalChargesInfo((prevCharges) => [...prevCharges, charges]);
      // Reset charge input
    }
  };

  useEffect(() => {
    console.log(additonalChargesInfo, "Additinal Charges");
  }, [additonalChargesInfo]);

  const removeGuest = (index) => {
    const updateGuest = all_guetsData.filter((_, i) => i !== index);
    setall_guetsData(updateGuest);
  };

  const removeCharge = (index) => {
    const updateList = additonalChargesInfo.filter((_, i) => i !== index);
    setAdditonalChargesInfo(updateList);
  };

  const changeMode = (e) => {
    setadvancePaymentMode(e.value);
  };

  // console.log(all_guetsData, "all");

  return (
    <div>
      <Nav user={user} />

      <div className="flex w-full justify-center">
        <div className="w-[70vh]">
          <form
            className="w-full flex flex-col p-3"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const checkInDate = new Date(checkIn);
                const checkOutDate = new Date(checkOut);
                console.log({
                  roomId: roomid,
                  guestName,
                  numberOfGuest,
                  all_guets: all_guetsData,
                  email,
                  number,
                  age: guestAge,
                  address: {
                    city,
                    state,
                    country,
                    streetAddress: "some street address",
                  },
                  checkIn: checkInDate.toISOString(),
                  additionalCharges: additonalChargesInfo,
                  advancePayment,
                  advancePaymentMode,
                  occuping_now,
                  checkOut: checkOutDate.toISOString(),
                });
                const res = await bookRoom({
                  variables: {
                    roomId: roomid,
                    guestName,
                    numberOfGuest,
                    all_guets: all_guetsData,
                    email,
                    number,
                    age: guestAge,
                    address: {
                      city,
                      state,
                      country,
                      streetAddress: "some street address",
                    },
                    checkIn: checkInDate.toISOString(),
                    additionalCharges: additonalChargesInfo,
                    advancePayment,
                    advancePaymentMode,
                    occuping_now,
                    checkOut: checkOutDate.toISOString(),
                  },
                });
                toast.success("Room Booked");
              } catch (e) {
                console.log(e);

                toast.error(e.message);
              }
            }}
          >
            {/* Form fields for roomNo, roomType, capacity, charges, description */}

            {/* <div className="flex flex-col gap-y-2">
            <label
              className="capitalize font-medium text-base"
              // htmlFor="room_no"
            >
              guest Name
            </label>
            <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
              <input
                type="text"
                className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                id="room_no"
                placeholder="Guest Name"
                value={guestName}
                onChange={(e) => setguestName(e.target.value)}
                required
              />
            </div>
          </div> */}

            <div className="flex flex-col gap-y-2">
              <label className="capitalize font-medium text-base">
                Guest Details
              </label>
              <div className="bg-white flex justify-between w-[90%]  rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="w-[48%] p-3 border border-gray-200 px-4 focus:outline-none h-[6vh]"
                  placeholder="Guest Name"
                  value={guestName}
                  onChange={(e) => setguestName(e.target.value)}
                />

                <input
                  type="number"
                  className="w-[48%] p-3 px-4 border border-gray-200 focus:outline-none h-[6vh]"
                  placeholder="Age"
                  value={guestAge}
                  onChange={(e) => setguestAge(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                // htmlFor="room_type"
              >
                Total guest
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="number"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="room_type"
                  placeholder="Room Type"
                  value={numberOfGuest}
                  onChange={(e) => setnumberOfGuest(Number(e.target.value))}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="capitalize font-medium text-base">
                Add Guest
              </label>
              <div className="bg-white flex justify-between w-[90%]  rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="w-[48%] p-3 border border-gray-200 px-4 focus:outline-none h-[6vh]"
                  placeholder="Guest Name"
                  value={additionalGuestName}
                  onChange={(e) => setAdditionalGuestName(e.target.value)}
                />

                <input
                  type="number"
                  className="w-[48%] p-3 px-4 border border-gray-200 focus:outline-none h-[6vh]"
                  placeholder="Age"
                  value={additionalGuestAge}
                  onChange={(e) =>
                    setAdditionalGuestAge(Number(e.target.value))
                  }
                />
              </div>
              <span
                className="mt-2 bg-blue-400 pl-3 pr-3 w-[20%] rounded-lg pt-2 pb-2 cursor-pointer"
                onClick={() => addGuests()}
              >
                Add Guest
              </span>
            </div>

            <div className="flex flex-col gap-y-2">
              {all_guetsData ? (
                <div>
                  <div className="flex flex-wrap ">
                    {all_guetsData.map((data, index) => (
                      <div>
                        {data.name && (
                          <div className="m-2 flex items-center bg-blue-400 rounded-lg p-2">
                            {data.name && (
                              <div className="flex items-center">
                                <span className="pl-1">
                                  {data.name} | {data.age} Years
                                </span>
                                <span
                                  className="pl-2 text-lg cursor-pointer"
                                  onClick={() => removeGuest(index)}
                                >
                                  <MdDeleteForever />
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div> </div>
              )}
            </div>

            {/* <div className="flex flex-col gap-y-2">
            <label className="capitalize font-medium text-base">
              Add Guest
            </label>
            <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
              <input
                type="text"
                className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                placeholder="Add Facility"
                value={totalGuest}
                onChange={(e) => settotalGuest(e.target.value)}
              />
            </div>
            <span
              className="mt-2 bg-blue-400 pl-3 pr-3 w-[20%] rounded-lg pt-2 pb-2"
              onClick={() => addGuest(totalGuest)}
            >
              Add Guest
            </span>
          </div> */}
            <div className="flex flex-col gap-y-2">
              {all_guets ? (
                <div>
                  <div className="flex flex-wrap">
                    {all_guets.map((data, index) => (
                      <div className="m-4 flex items-center bg-blue-400 rounded-lg p-2">
                        <span className="pl-1">{data}</span>
                        <span
                          className="pl-2 text-lg"
                          onClick={() => removeGuest(index)}
                        >
                          <MdDeleteForever />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div> </div>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                // htmlFor="capacity"
              >
                Email..
              </label>
              <div className="w-[90%] border border-gray-200 rounded-lg overflow-hidden ">
                <input
                  type="email"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh] "
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                // htmlFor="capacity"
              >
                Number..
              </label>
              <div className="w-[90%] border border-gray-200 rounded-lg overflow-hidden ">
                <input
                  type="number"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh] "
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            {/* <div className="flex flex-col gap-y-2">
            <label
              className="capitalize font-medium text-base"
              // htmlFor="charge"
              >
              Address
              </label>

            <div className="bg-white w-[90%] border border-gray-200 rounded-lg flex ">
              <CountrySelect className="flex" placeHolder="Select Country" />
            </div>
          </div> */}

            <div className="flex mt-4 m-2 max-h-[20vh]">
              <div className="overflow-hidden overflow-y-auto cursor-pointer">
                {/* <CountrySelect
                  onChange={(e) => {
                    setCountry(e.name);
                    setcountryId(e.id);

                    console.log(countryID, "cid");
                  }}
                  placeHolder="Select Country"
                /> */}

                <input
                  type="text"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh] "
                  placeholder="Country"
                  name="Country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="overflow-hidden overflow-y-auto">
                {/* <StateSelect
                  countryid={countryID}
                  onChange={(e) => {
                    setstateID(e.id);
                    setState(e.name);
                  }}
                  placeHolder="Select State"
                /> */}

                <input
                  type="text"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh] "
                  placeholder="State"
                  name="state"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="overflow-hidden overflow-y-auto">
                {/* <CitySelect
                  countryid={countryID}
                  stateid={stateID}
                  onChange={(e) => {
                    console.log(e);
                    setCity(e.name);
                    console.log(city);
                    
                  }}
                  placeHolder="Select City"
                /> */}

                <input
                  type="text"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh] "
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                // htmlFor="charge"
              >
                Check-In and Check-Out
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="date"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="charge"
                  placeholder="Charges per night"
                  value={checkIn}
                  onChange={(e) => setcheckIn(e.target.value)}
                  required
                />
                <input
                  type="date"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="charge"
                  placeholder="Charges per night"
                  value={checkOut}
                  onChange={(e) => setcheckOut(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* 
          <div className="flex flex-col gap-y-2">
            <label
              className="capitalize font-medium text-base"
              // htmlFor="charge"
            >
              Additional information
            </label>
            <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
              <input
                type="text"
                className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                id="charge"
                placeholder="Additioanl Info"
                value={additionData}
                onChange={(e) => setadditionData(e.target.value)}
                required
              />
            </div>
          </div> */}

            <div className="flex flex-col gap-y-2">
              <label className="capitalize font-medium text-base">
                Additional Charges
              </label>
              <div className="bg-white flex justify-between w-[90%]  rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="w-[48%] p-3 border border-gray-200 px-4 focus:outline-none h-[6vh]"
                  placeholder="Name"
                  value={additionalChargesName}
                  onChange={(e) => setadditionalChargesName(e.target.value)}
                />

                <input
                  type="number"
                  className="w-[48%] p-3 px-4 border border-gray-200 focus:outline-none h-[6vh]"
                  placeholder="Amount"
                  value={additionalCharges}
                  onChange={(e) => setadditionalCharges(e.target.value)}
                />
              </div>
              <span
                className="mt-2 bg-blue-400 pl-3 pr-3 w-[20%] rounded-lg pt-2 pb-2 cursor-pointer"
                onClick={() => addCharges()}
              >
                Add Charge
              </span>
              <div>
                {additonalChargesInfo &&
                  additonalChargesInfo.map((data, index) => (
                    <div>
                      {data.name && (
                        <div className="flex items-center w-fit bg-blue-400 rounded-lg p-2">
                          <span className="pl-1">
                            {data.name} : ${data.charge}
                          </span>
                          <span
                            className="pl-2 text-lg cursor-pointer"
                            onClick={() => removeCharge(index)}
                          >
                            <MdDeleteForever />
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                // htmlFor="charge"
              >
                Additional Charge
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="number"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="charge"
                  placeholder="Charges per night"
                  value={additionalCharges}
                  onChange={(e) =>
                    setadditionalCharges(parseInt(e.target.value))
                  }
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                // htmlFor="description"
              >
                PAYMENT MODE
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg ">
                <Select
                  id="payment-method"
                  value={advancePaymentMode}
                  onChange={(e) => changeMode(e)}
                  options={options}
                  className="w-64 mt-2"
                  placeholder="Select a method"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={occuping_now}
                  onChange={(e) => setoccuping_now(e.target.checked)}
                  className="h-4 w-4"
                />
                <span>Occupied now</span>
              </label>
            </div>

            <div>
              <button className="bg-[#3b55ffd2] px-4 py-3 mt-5 rounded-lg w-[50%] h-[6vh] flex items-center justify-center text-lg font-semibold text-white">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkin;
