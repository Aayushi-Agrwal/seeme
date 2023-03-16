import { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { Sidebar, UserProfile } from "../components";
import Pins from "./Pins";
import { userQuery } from "../utils/data";
import logo from "../assets/logo.png";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "")
      : localStorage.clear();

  // useEffect(() => {
  //   const query = userQuery(userInfo?.googleId);

  //   client.fetch(query)
  //   .then((data) => (
  //     setUser(data[0])
  //   ))
  // }, []);

  return (
    <div className="flex bg-gray-50">
      <div className="">
        <Sidebar />
      </div>
      <div>
        <HiMenu onClick={() => setToggleSidebar(!toggleSidebar)} />
        <Link to={`user-profile/$(user?._id)`}>
          <img src={logo} alt="logo" className="w-20" />
        </Link>
      </div>
      Home
    </div>
  );
};

export default Home;
