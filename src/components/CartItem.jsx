import { useDispatch } from "react-redux";
import { increaseQuantity, removeItem } from "../features/shopingSlice";

const CartItem = ({ item ,handleDecrease}) => {
  const dispatch = useDispatch()
  return (
    <div className="p-5 flex items-center justify-between gap-48 mb-4">
      {/* left */}
      <div className="flex items-center gap-4 w-2/5">
        <img className="w-20 h-20 shrink-0 object-contain" src={item.image} />
        <div className="flex flex-col justify-between gap-2">
          <span className="line-clamp-1 font-bold">{item.title}</span>
          <span className="line-clamp-1 text-rose-600">{item.category}</span>
          <button className="w-fit text-gray-500"onClick={()=> {dispatch(removeItem(item.id))}}>Remove</button>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center justify-between w-3/5">
        <div className="space-x-4">
          <button className="text-2xl font-bold"  onClick={() => handleDecrease(item)}>-</button>
          <span className="px-3 py-1 border border-gray-400">{item.quantity}</span>
          <button className="text-2xl font-bold"  onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>

        <span className="text-neutral-800">€ {item.price}</span>
        <span className="text-neutral-800">€ {item.price * item.quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
