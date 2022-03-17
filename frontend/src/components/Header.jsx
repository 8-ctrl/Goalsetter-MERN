import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { logout, reset } from "../features/auth/authSlice";
import { useDarkMode } from "../context/DarkModeContexProvider";

function Header() {
  const { darkMode, darkModeToggle } = useDarkMode();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div
      className={`${darkMode} ? dark:bg-slate-900 dark:text-white : bg-white text-black`}
    >
      <header className="flex flex-row p-3 px-10 w-full justify-around items-center border-b dark:border-gray-700">
        <div className=" font-bold text-l">
          <Link to="/">GoalSetter</Link>
        </div>
        <ul>
          {user ? (
            <div className="flex flex-row gap-7">
              <li className="pt-3">
                <button onClick={darkModeToggle}>
                  {darkMode ? (
                    <HiSun className="toggle " />
                  ) : (
                    <HiMoon className="toggle" />
                  )}
                </button>
              </li>
              <li>
                <button
                  className="flex items-center justify-center h-12 w-20 px-2 hover:cursor-pointer hover:bg-gray-700 hover:text-white text-sm text-center text-gray-600 transition-colors duration-200 transform border border-gray-800 rounded-lg lg:h-10 dark:border-gray-300  dark:hover:bg-slate-700 dark:hover:text-white dark:bg-white dark:text-slate-900 focus:outline-none"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </li>
            </div>
          ) : (
            <div className="flex flex-row w-44 justify-end">
                <li className="pt-3 px-3 ">
                <button className='hover:bg-gray-300 dark:hover:bg-slate-700 rounded-md' onClick={darkModeToggle}>
                  {darkMode ? (
                    <HiSun className="toggle " />
                  ) : (
                    <HiMoon className="toggle" />
                  )}
                </button>
              </li>
              <li>
                <Link to="/login">
                <button
                  className="flex items-center justify-center h-12 w-20 px-2 hover:cursor-pointer hover:bg-gray-700 hover:text-white text-sm text-center text-gray-600 transition-colors duration-200 transform border border-gray-800 rounded-lg lg:h-10 dark:border-gray-300  dark:hover:bg-slate-700 dark:hover:text-white dark:bg-white dark:text-slate-900 focus:outline-none"
                >
                  Login
                </button>
                </Link>
              </li>
              {/* <li>
                <Link to="/register">
                <button
                  className="flex items-center justify-center h-12 w-20 px-2 hover:cursor-pointer text-sm text-center text-gray-600 transition-colors duration-200 transform border border-gray-800 rounded-lg lg:h-10 dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                >
                  Register
                </button>
                </Link>
              </li> */}
            </div>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Header;
