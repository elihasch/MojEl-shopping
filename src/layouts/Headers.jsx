import { Link } from "react-router-dom";
import Logo from "../assets/Screenshot.png";
import shoping from "../assets/shop.svg";
import { useSelector } from "react-redux";

function Headers() {
  const cartItems = useSelector((state) => state.counter.items);
  const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <header className="border-b border-gray-300 py-4 mb-5">
      <nav className="flex justify-between items-center container mx-auto px-4">
        <div className="flex gap-2 items-center">
          <img
            className="w-20 h-14 rounded-full object-cover"
            src={Logo}
            alt="us"
          />
          <h1 className="text-lg font-bold">MojEl Store</h1>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/">Home</Link>

          <Link to="/shoping" className="relative">
            <img
              className="w-12 h-10 p-2 rounded-full object-center"
              src={shoping}
              alt="shopingLogo"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#9B7D66] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Headers;
