import {AiFillStar} from 'react-icons/ai'

import "./style.scss";

const PropertyTypes = () => {
  const data = [
    {
      _id: 1,
      photos:
        "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Hotels",
      startPrice: 888,
      rating: "3.8",
    },
    {
      _id: 2,
      photos:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Restorts",
      startPrice: 888,
      rating: "4.6",
    },
    {
        _id: 3,
        photos:
          "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5c2NyYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Skyscrapers",
        startPrice: 888,
        rating: "4.5",
      },
      {
        _id: 4,
        photos:
          "https://images.unsplash.com/photo-1629371997433-d11e6161a8b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Apartments",
         startPrice: 888,
        rating: "4.2",
      },
  ];
  return (
    <div className="type">
      {data.map((type) => (
        <div className="fpItem" key={type._id}>
          <img src={type.photos} alt="fp" className="fpImg" />
          <span className="fpName">{type.name}</span>
          <span className="fpPrice">Starting from $ {type.startPrice}</span>
          <div className="fpRating">
            {type.rating && <button>{type.rating}<AiFillStar/></button>}
            <span>Excellent</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyTypes;
