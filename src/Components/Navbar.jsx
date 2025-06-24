import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Prime_Course</h1>
        <nav className="hidden md:flex space-x-5">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="hover:text-orange-600 transition">Dashboard</Link>
              <Link to="/courses" className="hover:text-orange-600 transition">All Courses</Link>
              <Link to="/notes" className="hover:text-orange-600 transition">My Notes</Link>
            </>
          ) : (
            <>
              <a href="#about" className="hover:text-orange-600 transition">About</a>
              <a href="#contacts" className="hover:text-orange-600 transition">Contact</a>
            </>
          )}
        </nav>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hidden md:inline-block px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:inline-block px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Login
          </Link>
        )}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="block text-black hover:text-orange-600">Dashboard</Link>
              <Link to="/courses" className="block text-black hover:text-orange-600">All Courses</Link>
              <Link to="/notes" className="block text-black hover:text-orange-600">My Notes</Link>
            </>
          ) : (
            <>
              <a href="#about" className="block text-black hover:text-orange-600">About</a>
              <a href="#contacts" className="block text-black hover:text-orange-600">Contact</a>
            </>
          )}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block w-full text-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block mt-2 text-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
