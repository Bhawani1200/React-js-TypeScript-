import { NavLink } from "react-router-dom";
import { useState } from "react";

import navMenu from "../constants/navMenu";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";

const Navbar = ({ user }: { user: boolean }) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
      : "text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  return (
    <nav className="border-gray-200 py-4 px-5 sticky top-0 bg-white shadow">
      <div className="w-full mx-auto">
        <div className="mx-2 flex flex-wrap items-center justify-between ">
          <Logo />
          <div className="flex md:hidden md:order-2">
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`md:flex justify-between items-end w-full md:w-auto md:order-1 ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex items-center md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              {navMenu
                .filter(({ auth }) => (user ? auth : !auth))
                .map(({ label, route }) => (
                  <li key={route}>
                    <NavLink to={route} className={navLinkClass}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              {user ? (
                <li>
                  <button
                    className="bg-blue-700 text-white py-2 px-5 rounded-3xl"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
