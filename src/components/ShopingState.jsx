import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueryModal from "./modules/QueryModal";
import toast from "react-hot-toast";
import { decreaseQuantity } from "../features/shopingSlice";
import CartItem from "./CartItem";

function ShoppingState() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const cartItems = useSelector((state) => state.counter.items);
  console.log("cartItems", cartItems);
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
      <div className="flex flex-col w-3/4">
        <div className="flex justify-between pb-8 border-b border-b-gray-300">
          <p className="text-xl font-medium ">Shopping Cart</p>
          <p className="text-xl font-medium pr-[200px]">Items</p>
        </div>
        <div>
          <div className="flex gap-48 items-center justify-between p-5">
            <span className="w-2/5 text-neutral-400 uppercase font-bold">
              Product Details
            </span>
            <div className="w-3/5 flex items-center justify-between text-neutral-400 uppercase font-bold">
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
            </div>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleDecrease={handleDecrease}
            />
          ))}
        </div>
      </div>

      <div className=" flex flex-col items-center w-1/4 gap-10  ml-7">
        <p className=" text-xl font-medium pb-8 w-full border-b border-b-gray-300 text-center">
          Order Summary
        </p>
        <div className="flex flex-col gap-6 w-fit">
          <div className="flex justify-between  ">
            <p>ITEMS {cartItems.length}</p>
            <p> $ {total.toFixed(2)}</p>
          </div>
          <p>SHIPPING</p>
          <select class="border border-gray-300 rounded-md p-3">
            <option value="">Standard Delivery - €5.00</option>
            <option value="1">DPL - €6.00</option>
            <option value="2">Hermes - €8.00</option>
          </select>
          <p>PROMO CODE</p>
          <input
            className="border border-gray-300 p-3 rounded-ms"
            type="number"
            name="code"
            id="code"
            placeholder="Enter your code"
          />
          <button className="bg-red-500 text-white p-3 rounded-ms">
            APPLY
          </button>

          <div className="border-t border-gray-300 mt-8 flex flex-col gap-6">
            <p className="mt-4 font-bold text-gray-600">
              TOTAL COST: <span> ${total.toFixed(2)}</span>
            </p>
            <button className="text-l  font-bold bg-blue-600 text-white p-3 rounded-ms">
              CHECKOUT
            </button>
          </div>
          {openModal && selectedItem && (
            <QueryModal
              setOpenModal={setOpenModal}
              item={selectedItem}
              openModal={openModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingState;
