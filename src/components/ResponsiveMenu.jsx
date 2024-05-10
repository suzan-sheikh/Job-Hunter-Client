import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const { user, logout } = useAuth();

  // NavLink
  const navLink = (
    <>
      <li className="py-1">
        <NavLink
          to="/"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="py-1">
        <NavLink
          to="/allPlace"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>

      <li className="py-1">
        <NavLink
          to="/addTourist"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>

      <li className="py-1">
        <NavLink
          to="/myList"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          My List
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gradient-to-b from-primary to-secondary px-8 pb-6 pt-4 text-white transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="w-full relative">
          <button
            onClick={() => setShowMenu(false)}
            className="btn-sm text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 border-none outline-none right-0 top-0 absolute 2/12"
          >
            X
          </button>
        </div>

        {user ? (
          <div className="flex items-center gap-2">
            <div className="rounded-full cursor-pointer">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt={user.displayName}
                title={user.displayName}
              />
            </div>
            <button
              className="btn btn-sm btn-neutral text-white"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button
                onClick={() => setShowMenu(false)}
                className="btn-sm text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 border-none outline-none"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                onClick={() => setShowMenu(false)}
                className="btn-sm text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 border-none outline-none"
              >
                Register
              </button>
            </Link>
          </div>
        )}

        <nav className="mt-5">
          <ul className="space-y-1 text-md text-white">{navLink}</ul>
        </nav>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.func,
  setShowMenu: PropTypes.func,
};
export default ResponsiveMenu;
