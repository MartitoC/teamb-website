import React from "react";

const Card = ({ title, image }) => {
  return (
    <div className="flex justify-center isolate px-6 pt-70 lg:px-8 border-r-4">
      <div className="mx-5">
        <div className="m-2">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-center text-xl font-bold text-gray-600">{title}</h2>
            </div>
            <div className="px-6 py-4">
              <img className="h-40 w-40 p-4" src={image} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
