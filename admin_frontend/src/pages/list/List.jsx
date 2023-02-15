import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar, SearchItem } from "../../components";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "./style.scss";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpenDate] = useState(false);

  return (
    <>
      <Navbar />
      <div className="marginTop"></div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label>Destination</label>
              <input type="text" value={destination} />
            </div>

            <div className="lsItem">
              <label>Check-In Date</label>
              <span onClick={() => setOpenDate(!opendate)}>
                {`${format(date[0].startDate, "dd/MM/yy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yy"
                )}`}
              </span>
              {opendate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Min price <small> &nbsp; per night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder="$"
                />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Max price <small> &nbsp; per night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder="$"
                />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.child}
                />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button className="searchBtn">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
