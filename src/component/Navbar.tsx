import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

// Define the structure for navigation links
interface NavLink {
  to: string;
  label: string;
}

export default function Navbar() {
  // State for menu open/close
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // State for dark mode, initializing from local storage
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  // Effect to toggle dark mode class on the HTML document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Navigation links array
  const navLinks: NavLink[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];

  // Function to handle link clicks (closes the menu)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay when the menu is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"></div>
      )}

      <nav className="fixed top-4 right-4 md:top-4 md:left-1/2 md:-translate-x-1/2 z-50 flex items-center space-x-6 md:justify-center">
        {/* Menu button for mobile */}
        <button
          className="md:hidden py-2 px-3 bg-white dark:bg-[#1e1e1e] rounded-full border border-gray-300 dark:border-none shadow-md transition-all hover:bg-gray-300 dark:hover:bg-gray-600 z-50"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu className="text-gray-500 text-xl dark:text-gray-400" />
        </button>

        {/* Navigation menu */}
        <div
          className={`bg-white dark:bg-zinc-800/90 shadow-lg rounded-full px-8 py-2 border border-solid border-gray-300  dark:border-none flex flex-col space-y-4 md:flex md:flex-row md:space-x-4 md:space-y-0 items-center ${
            isOpen
              ? "flex w-4/5 max-w-md h-auto py-6 fixed top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl z-50"
              : "hidden md:flex"
          } absolute md:static`}
        >
          {/* Close button for mobile menu */}
          {isOpen && (
            <button
              className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md transition-all hover:bg-gray-300 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FiX className="text-gray-900 dark:text-white" />
            </button>
          )}

          {/* Navigation links */}
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-500 focus:text-teal-600 dark:focus:text-teal-500 font-bold space-x-3 dark:text-gray-300 text-center hover:text-teal-600 dark:hover:text-teal-400 text-sm"
              onClick={handleLinkClick} // Close menu when a link is clicked
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Dark mode toggle button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 bg-white dark:bg-zinc-800/90 border border-gray-300 dark:border-none rounded-full shadow-md z-40"
        >
          {darkMode ? (
            <FiSun className="text-xl text-gray-500 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500" />
          ) : (
            <FiMoon className="text-xl text-gray-500 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500" />
          )}
        </button>
      </nav>
    </>
  );
}
