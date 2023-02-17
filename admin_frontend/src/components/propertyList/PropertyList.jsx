import React from "react";
import useFetch from "../../hooks/useFetch";

import "./style.scss";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotel/countByType");

  const images = [
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FiaW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://media.istockphoto.com/id/1393538022/photo/modern-townhouse-design.jpg?b=1&s=170667a&w=0&k=20&c=rKf8aaJVEz-gNwTVbpptk_2s7VOp6sgsuR2buyL8Ygs=",
  ];

  return (
    <div className="pList">
      {loading ? (
        "Loading, Plz wait..."
      ) : (
        <>
          {data.map((item, index) => {
            return (
              <div key={index} className="pListItem">
                <img
                  className="pListImg"
                  src={images[index]}
                  alt="lt"
                />
                <h1>{item.type}</h1>
                <h2>{item.count} {item.type}</h2>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default PropertyList;
