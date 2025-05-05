import Logo from "../assets/Screenshot.png";

function Headers() {
  return (
    <header className="border-b border-gray-300 py-4 mb-5">
      <nav className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className=" h-full size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"
            src={Logo}
            alt="us"
          />
          <h1>MojEl Store</h1>
        </div>
        <ul className="flex gap-4 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;
