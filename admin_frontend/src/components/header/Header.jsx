import React, { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "./style.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });

  const handleDate = () => {
    setOpenDate(!openDate);
  };

  const handleOptions = () => {
    setOpenOptions(!openOptions);
  };

  const handleOption = (name, val) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: val === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="marginTop"></div>
      <div className="headerContainer">
        <div className="headerText">
          <h1 className="slogan">
            Experience <span style={{ color: "orange" }}>comfort</span>
            <br />
            at your <span style={{ color: "orange" }}>fingertips</span>
            <br />
            Book your next <br />
            <span style={{ color: "orange" }}>adventure</span> with us!
          </h1>

          <p className="headerDesc">
            Get rewarded for your travels – unlock instant savings of{" "}
            <span style={{ color: "rgb(255, 226, 4)" }}>10%</span> or more with
            a free <span style={{ color: "rgb(255, 226, 4)" }}>TravelNest</span>{" "}
            account
          </p>

          <div>
            <button className="headerBtn">Sign in / Register</button>
          </div>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <FontAwesomeIcon icon={faSearch} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
              />
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span className="headerSearchText" onClick={handleDate}>
                {`${format(date[0].startDate, "dd/MM/yy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span className="headerSearchText" onClick={handleOptions}>
                {`${options.adult} adults - ${options.child} children - ${options.room} room`}
              </span>

              {openOptions && (
                <div className="option">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button onClick={() => handleOption("adult", "d")} 
                      disabled={options.adult <= 1}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">{options.adult}</span>
                      <button onClick={() => handleOption("adult", "i")}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button onClick={() => handleOption("child", "d")}
                      disabled={options.child <= 0}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">{options.child}</span>
                      <button onClick={() => handleOption("child", "i")}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button onClick={() => handleOption("room", "d")}
                      disabled={options.room <= 1}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">{options.room}</span>
                      <button onClick={() => handleOption("room", "i")}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="headerSearchItem">
              <button className="headerSearchBtn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
