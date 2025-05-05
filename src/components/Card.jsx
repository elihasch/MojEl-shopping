import React from "react";
import RatingStar from "./RatingStar";

function Card({ ...item }) {
  return (
    <div className="flex flex-col gap-3 items-center w-[300px] border border-gray-300 rounded-2xl p-5">
      <div className="w-full flex items-center justify-center">
        <img
          className="h-[200px] object-contain "
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="flex flex-col gap-1 justify-between flex-grow">
        <h2 className="text-lg font-semibold mb-1 line-clamp-1">
          {item.title}
        </h2>
        <p className="text-sm text-gray-700 mb-10 line-clamp-2">
          {item.description}
        </p>
        <div className="mt-auto flex justify-between items-center">
          <span className="font-bold text-[#9B7D66]">$ {item.price}</span>
          <button className="bg-[#9B7D66] text-white px-3 py-1 rounded-md text-sm">
            + Add to Cart
          </button>
        </div>
        <RatingStar rating={item.rating} />
      </div>
    </div>
  );
}

export default Card;
