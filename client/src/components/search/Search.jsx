import React, { useState } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { FaHotel, FaSearch, FaMoneyCheckAlt } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";

import { country } from "../header/data";

import "./style.scss";
import { useDispatch } from "react-redux";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [autoSuggestion, setAutoSuggestion] = useState([]);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === "") {
      setAutoSuggestion([]);
      return;
    }
    const filteredNames = country.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAutoSuggestion(filteredNames);
  };

  const handleSuggestions = (e, name) => {
    e.preventDefault();
    name = name.toLowerCase();
    setSearchTerm(name);
    setAutoSuggestion([]);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
  };


  return (
    <div className="headerSearch">
      <div className="headerSearchItem">
        <SiYourtraveldottv className="searchlogo" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="headerSearchInput"
          onChange={handleInputChange}
        />
        <ul className="search__suggestion">
          {autoSuggestion &&
            autoSuggestion.map((name, index) => (
              <li key={index} onClick={(e) => handleSuggestions(e, name)}>
                {name}
              </li>
            ))}
        </ul>
      </div>

      <div className="headerSearchItem">
        <FaHotel className="searchlogo" />
        <select className="searchType">
          <option value="">Select a type of stay</option>
          <option value="hotel">Hotel</option>
          <option value="resort">Resort</option>
          <option value="skyscraper">Skyscraper</option>
          <option value="apartment">Apartment</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="headerSearchItem">
        <FaMoneyCheckAlt className="searchlogo" />
          <input
            type="Number"
            placeholder="Starting Price"
            className="headerSearchInput"
            min="500"
            // onChange={}
          />
          <button className="headerSearchBtn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* <div className="headerSearchItem">
        <button className="headerSearchBtn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div> */}
    </div>
  );
};

export default Search;
