import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueryModal from "./modules/QueryModal";
import toast from "react-hot-toast";
import { decreaseQuantity, increaseQuantity } from "../features/shopingSlice";

function ShoppingState() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const cartItems = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  useEffect(() => {
    if (cartItems.length === 0) {
      toast("Your shopping cart is empty");
    }
  }, [cartItems.length]);

  const handleDecrease = (item) => {
    if (item.quantity <= 1) {
      setSelectedItem(item);
      setOpenModal(true);
    } else {
      dispatch(decreaseQuantity(item.id));
    }
  };

  return (
    <div className="flex justify-between">
      {cartItems.length > 0 && (
        <div className="border border-gray-300 ">
          {cartItems.map((item) => (
            <div
              className=" grid grid-cols-2 gap-4 w-[400px] mx-auto p-2 "
              key={item.id}
            >
              <div className="">
                <img
                  className="object-full p-5"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1 line-clamp-1 my-6">
                  {item.title}
                </h2>
                <span className="font-bold text-gray-600">${item.price}</span>
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#9B7D66]">
                    ${item.price * item.quantity}
                  </span>
                  <div className="flex gap-5 items-center border-1 px-2 border-[#d3b7a1]">
                    <button
                      className="text-4xl  text-[#9B7D66] "
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      className="text-2xl font-bold text-[#9B7D66] "
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-4 font-bold text-black">Total: ${total.toFixed(2)}</p>
      {openModal && selectedItem && (
        <QueryModal
          setOpenModal={setOpenModal}
          item={selectedItem}
          openModal={openModal}
        />
      )}
    </div>
  );
}

export default ShoppingState;
