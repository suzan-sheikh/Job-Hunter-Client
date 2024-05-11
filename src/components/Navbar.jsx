import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logOut } = useAuth();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Theme Controller
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // NavLink
  const navLink = (
    <>
      <li className="py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-secondary text-sm"
              : "text-sm text-black border-none"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="py-4">
        <NavLink
          to="/allJobs"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-secondary text-sm"
              : "text-sm text-black border-none"
          }
        >
          All Jobs
        </NavLink>
      </li>

      <li className="py-4">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-secondary text-sm"
              : "text-sm text-black border-none"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 backdrop-blur-sm text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-2">
          <div className="container sm:block hidden mx-auto px-4">
            <div className="flex items-center justify-between">
              <p className="text-sm">World Best Job Hunting Website</p>
              <p className="text-sm">Mobile: +8801855189653</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-1 mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="logo" className="w-32" />
                {/* <img src={} alt="" className="h-16" /> */}
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">{navLink}</ul>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <ul className="menu menu-horizontal px-1">
                {!user && (
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                )}
              </ul>

              {user && (
                <div className="dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      title={user?.displayName}
                      className="w-10 rounded-full"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        alt="User Profile Photo"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to='/addJobs'>
                        <div>Add A Job</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/myJobs">
                        <div>My Jobs</div>
                      </Link>
                    </li>

                    <li>
                      <Link to='/appliedJobs'>
                        <div>Applied Jobs</div>
                      </Link>
                    </li>
                    <li className="mt-2">
                      <button
                        onClick={logOut}
                        className="bg-gray-200 block text-center"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              <div>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    onChange={handleTheme}
                    type="checkbox"
                    className="theme-controller"
                    value="synthwave"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>

              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
