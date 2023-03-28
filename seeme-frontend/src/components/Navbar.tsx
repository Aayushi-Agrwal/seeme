import React from "react";
import { user } from "../types";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import userImg from "../assets/defaultUser.png";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  user,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  user: user;
}) => {
  const navigate = useNavigate();
  if (!user) return null;
  console.log(searchTerm);

  return (
    <div className="flex gap-2 w-full md:gap-5 mt-5 pb-7">
      <div className="flex justify-start items-center w-full bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search"
          className="p-2 w-full bg-white outline-none"
          onFocus={() => navigate("/search")}
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?.name}`}>
          <img src={userImg} alt="user-pic" className="w-14 h-14 rounded-lg" />
        </Link>

        <Link
          to="/create-pin"
          className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
