import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import userImg from "../assets/defaultUser.png";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { user } from "../types";
import { categories } from "../utils/data";

const Sidebar = ({
  closeToggle,
  user,
}: {
  closeToggle?: React.Dispatch<React.SetStateAction<boolean>>;
  user?: user;
}) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  const isNotActiveStyle =
    "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
  const isActiveStyle =
    "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

  const mapDiscoverCategories = categories.map((category) => {
    return (
      <NavLink
        to={`/category/${category.name}`}
        className={({ isActive }) =>
          isActive ? isActiveStyle : isNotActiveStyle
        }
        onClick={handleCloseSidebar}
        key={category.name}
      >
        <img
          src={category.image}
          alt=""
          className="w-8 h-8 rounded-fill shadow-sm"
        />
        {category.name}
      </NavLink>
    );
  });

  return (
    <div className="flex flex-col justify-between bg-white h-screen min-w-260 overflow-y-scroll hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className="flex gap-2 w-190 px-2 my-6 pt-1 items-center"
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="text-base 2xl:text-xl mt-2 px-5">
            Discover categories
          </h3>
          {mapDiscoverCategories}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user.name}`}
          className="flex bg-white rounded-lg shadow-lg my-5 mb-3 gap-2 p-2 mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={userImg} className="w-10 h-10 rounded-full" alt="" />
          <p>{user.name}</p>
          <IoIosArrowForward />
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
