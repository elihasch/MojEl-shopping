import { Link } from "react-router-dom";
import Logo from "../assets/Screenshot.png";

function Headers() {
  return (
    <header className="border-b border-gray-300 py-4 mb-5">
      <nav className="flex justify-between items-center container mx-auto px-4">
        <div className="flex gap-2 items-center">
          <img
            className="w-20 h-14 rounded-full object-cover"
            src={Logo}
            alt="us"
          />
          <h1>MojEl Store</h1>
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/loging">Loging</Link>
        </div>
      </nav>
    </header>
  );
}

export default Headers;
