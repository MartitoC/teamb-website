import React from "react";

const Card = ({ title, number, image, text }) => {
  return (
    <div className="card flex flex-col justify-between items-center max-w-sm bg-white shadow-lg rounded-lg overflow-hidden h-140 transform transition-transform duration-300">
      <div className="flex px-6 py-4 items-center">
        <img className="w-16 h-16" src={number} alt="" />
        <h2 className="h-100 text-center text-xl font-bold ">{title}</h2>
      </div>
      <div className="px-6 mx-3 text-gray-600 tracking-wide">
        {text}
      </div>
      <div className="px-6 py-4 flex justify-center items-center">
        <img className="h-40 w-40 p-4" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Card;