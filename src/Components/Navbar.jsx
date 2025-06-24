import { useState } from "react";

const Navbar = () => {
  const [brandName] = useState("Course_Tracker");
  const [menuLinks] = useState([
    { title: "Home", link: "#home", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Dashboard", link: "#dashboard", id: 3 },
    { title: "All Courses", link: "#courses", id: 4 },
    { title: "My Notes", link: "#notes", id: 5 },
    { title: "Contact", link: "#contacts", id: 6 },
  ]);
  const [actionButton] = useState({
    title: "Login",
    link: "#home",
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold">{brandName}</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-5">
          {menuLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-orange-600 transition"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <a
          href={actionButton.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-4 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition"
        >
          {actionButton.title}
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          {menuLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-orange-600"
            >
              {link.title}
            </a>
          ))}
          <a
            href={actionButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
          >
            {actionButton.title}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
