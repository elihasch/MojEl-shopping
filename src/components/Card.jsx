import { useState } from "react";
import Loader from "./modules/Loader";
import RatingStar from "./RatingStar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shopingSlice";

function Card({ ...item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const clickHandler = () => {
    navigate(`${item.id}`);
  };

  const addedHandler = () => {
    setLoading(true);
    dispatch(addItem(item));

    setInterval(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col gap-3 items-center w-[300px] border border-gray-300 rounded-2xl p-5">
      <div
        onClick={clickHandler}
        className="w-full flex items-center justify-center"
      >
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
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {item.description}
        </p>
        <RatingStar rating={item.rating} />
        <div className="mt-auto flex justify-between items-center">
          <span className="font-bold text-[#9B7D66]">$ {item.price}</span>
          <button
            onClick={addedHandler}
            disabled={loading}
            className="bg-[#9B7D66] w-[150px] text-white px-3 py-1 rounded-md text-sm"
          >
            {loading ? "Loading..." : "+ Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
