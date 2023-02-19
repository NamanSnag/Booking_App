import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRoom, setSelectedRoom] = useState([]);

  const { data, loading, error } = useFetch(`/hotel/rooms/${hotelId}`);
  console.log(data);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(
      checked
        ? [...selectedRoom, value]
        : selectedRoom.filter((item) => item !== value)
    );
  };

  console.log(selectedRoom)
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="close"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms : </span>
        {data.map((room) => {
          return (
            <div key={room._id} className="rItem">
              <div className="rItemInfo">
                <div className="rTitle">{room.title}</div>
                <div className="rDesc">{room.desc}</div>
                <div className="rMax">
                  Max people: <b>{room.maxPeople}</b>
                </div>
                <div className="rPrice">{room.price}</div>
              </div>
              {room.roomNumbers.map((roomNumber) => {
                return (
                  <div key={roomNumber._id} className="room">
                    <label className="roomNumber" for="check">{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      id='check'
                      onChange={handleSelect}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reserve;
