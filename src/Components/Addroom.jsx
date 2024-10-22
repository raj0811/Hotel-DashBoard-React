import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ROOM, GET_USER} from "../Qurries";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { GoDot } from "react-icons/go";
import { TiDelete } from "react-icons/ti";

import Nav from "./Nav";
const AddRoom = ({ user, set_user }) => {
  const [roomNo, setRoomNo] = useState("");
  const [roomType, setRoomType] = useState("");
  const [capacity, setCapacity] = useState(2);
  const [charges, setCharges] = useState(0);
  const [description, setDescription] = useState("");
  const [facility, setFacility] = useState("");
  const [facilities, setFacilities] = useState([]);

  const [createRoom] = useMutation(CREATE_ROOM);

  if (!user) {
    console.log(user, "user not found");
  }
  const addFacilities = () => {
    if (facility.trim() !== "") {
      // Ensure facility is not empty
      console.log('add');
      setFacilities((prevFacilities) => [...prevFacilities, facility]);
      // setFacilities([...facilities, facility]);
      setFacility(""); // Clear input after adding
    }
  };

  const removeFacilities = (index) => {
    console.log("removed",index);
    const updatedData = facilities.filter((_, i) => i !== index);
    setFacilities(updatedData);
  };

  return (
    <div>
      <Nav user={user} />
      <div className="flex w-full p-4">
        <div className="flex pl-3 w-[60%]">
          <form
            className="w-full flex flex-col p-3"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const res = await createRoom({
                  variables: {
                    roomNo,
                    roomType,
                    capacity,
                    charges,
                    description,
                    facilities,
                  },
                });
                toast.success(res.data.createRoom); // Handle success response
                setRoomNo("");
                setRoomType("");
                setCapacity(2);
                setCharges(0);
                setDescription("");
                setFacilities([]);
              } catch (error) {
                console.error("Error creating room:", error);
              }
            }}
          >
            {/* Form fields for roomNo, roomType, capacity, charges, description */}

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                htmlFor="room_no"
              >
                Room No.
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="room_no"
                  placeholder="Room Number"
                  value={roomNo}
                  onChange={(e) => setRoomNo(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                htmlFor="room_type"
              >
                Room Type
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="room_type"
                  placeholder="Room Type"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                htmlFor="capacity"
              >
                Capacity
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="number"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="capacity"
                  placeholder="Capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(parseInt(e.target.value))}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                htmlFor="charge"
              >
                Charge
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="number"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="charge"
                  placeholder="Charges per night"
                  value={charges}
                  onChange={(e) => setCharges(parseInt(e.target.value))}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="capitalize font-medium text-base"
                htmlFor="description"
              >
                Description
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  id="description"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="capitalize font-medium text-base">
                Facilities
              </label>
              <div className="bg-white w-[90%] border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="w-full p-3 px-4 focus:outline-none h-[6vh]"
                  placeholder="Add Facility"
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                />
              </div>
              <span
                className="mt-2 bg-blue-400 pl-3 pr-3 w-[20%] rounded-lg pt-2 pb-2"
                onClick={() => addFacilities(facility)}
              >
                Add facility
              </span>
            </div>

            <div>
              <button className="bg-[#3b55ffd2] px-4 py-3 mt-5 rounded-lg w-[50%] h-[6vh] flex items-center justify-center text-lg font-semibold text-white">
                Add Room
              </button>
            </div>
          </form>
        </div>
        <div className="w-[40%] h-full">
          <div className="border-blue-300 h-[40vh] w-full">
            <span className="text-center pl-2 mt-2">Facilities</span>
            {facilities ? (
              <div className="flex flex-wrap">
                {facilities.map((data, index) => (
                  <div className="m-4 flex items-center bg-blue-400 rounded-lg p-2">
                    <span className="pl-1">{data}</span>
                    <span className="pl-2 text-lg">
                      <TiDelete onClick={()=>removeFacilities(index)} />
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
