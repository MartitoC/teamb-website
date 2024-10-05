import React from "react";

const Card = ({ title, image, text }) => {
  return (
    <div className="flex flex-col justify-between items-center max-w-sm mb-40 bg-white shadow-lg rounded-lg overflow-hidden h-140"> {/* Altura fija */}
      <div className="px-6 py-4">
        <h2 className="text-center text-xl font-bold text-gray-700">{title}</h2>
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
