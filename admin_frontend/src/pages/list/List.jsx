import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar, SearchItem } from "../../components";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "./style.scss";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [dates, setDates] = useState(location.state.dates);
  const [opendate, setOpenDate] = useState(false);
  const [min , setMin] = useState(undefined);
  const [max , setMax] = useState(undefined);

  const { data, loading, error, reFetchData } = useFetch(
    `/hotel?city=${destination}&min=${min || 1}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetchData();
  };

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
              <input type="text" placeholder={destination} onChange={(e)=> setDestination(e.target.value)} />
            </div>

            <div className="lsItem">
              <label>Check-In Date</label>
              <span onClick={() => setOpenDate(!opendate)}>
                {`${format(dates[0].startDate, "dd/MM/yy")} to ${format(
                  dates[0].endDate,
                  "dd/MM/yy"
                )}`}
              </span>
              {opendate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
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
                  onChange={(e) => setMin(e.target.value)}
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
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                  onChange={(e) => setOptions({
                    ...options,
                    adult: e.target.value,
                  })}
                />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.child}
                  onChange={(e) => setOptions({
                    ...options,
                    child: e.target.value,
                  })}
                />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                  onChange={(e) => setOptions({
                    ...options,
                    room: e.target.value,
                  })}
                />
              </div>
            </div>
            <button className="searchBtn" onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading
              ? "Loading, Plz wait..."
              : data.map((item) => {
                  return <SearchItem item={item} key={item._id} />;
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
