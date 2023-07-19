import React, { useEffect } from "react";

import "./style.scss";
import Search from "../../components/search/Search";
import axios from "axios";
import { base_URL } from "../../base";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import {
  currentHotel,
  fetchHotelsFailure,
  fetchHotelsStart,
  fetchHotelsSuccess,
} from "../../store/hotel";

const Hotel = () => {
  const { hotels, loading, error } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    dispatch(fetchHotelsStart());
    try {
      const res = await axios.get(`${base_URL}/api/hotel`);
      dispatch(fetchHotelsSuccess(res.data));
    } catch (error) {
      dispatch(fetchHotelsFailure(error));
    }
  };

  const handlehotel = async (e, hotel) => {
    e.preventDefault();
    dispatch(currentHotel(hotel));
    navigate(`/rooms/${hotel._id}`)
  };

  if (loading) {
    return (
      <div className="loading">
        <p>...Loading</p>
      </div>
    );
  }

  return (
    <div className="hotel">
      <div className="hotel__container">
        <div className="hotel__search">
          <Search />
        </div>
      </div>
      <div className="hotel__list">
        {hotels.map((hotel) => (
          <div
            className="hotel__item"
            key={hotel._id}
            onClick={(e) => handlehotel(e, hotel)}
          >
            <img
              className="hotel__img"
              src="https://plus.unsplash.com/premium_photo-1661902184762-49c2c8ebb787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWdyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="iss"
            />

            <div className="hotel__content">
              <h2>{hotel.name}</h2>
              <p>
                Location :{hotel.address.city}, {hotel.address.state},{" "}
                {hotel.address.country}
              </p>
              <p>Rooms : {hotel.rooms.length}</p>
              <p>Starting Price : $200</p>
              <p> Higest Price : $1000</p>
              <p>Rating : 4.2 *</p>
              <p>
                Discription : Heloo Lorem ipsum dolor sit. Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
