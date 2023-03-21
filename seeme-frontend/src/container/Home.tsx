import { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { Sidebar, UserProfile } from "../components";
import Pins from "./Pins";
import { client } from "../client";
import { userQuery } from "../utils/data";
import logo from "../assets/logo.png";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "")
      : localStorage.clear();

  const scrollRef = useRef(null);

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => setUser(data[0]));
  }, []);

  return (
    <div className="flex bg-gray-50 h-screen md:flex-row flex-col transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-intial">
        <Sidebar user={userInfo && userInfo} />
      </div>

      {/* small screen view */}
      <div className="flex md:hidden">
        <div className="flex flex-row justify-between w-screen p-2 shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          <Link to={`user-profile/${userInfo?.name}`}>
            <img
              src={userInfo?.image}
              alt="user-pic"
              className="w-9 h-9 rounded-full"
            />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed z-10 w-4/5 bg-white h-screen shadow-md animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                className="cursor-pointer"
                fontSize={30}
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar
              closeToggle={setToggleSidebar}
              user={userInfo && userInfo}
            />
          </div>
        )}
      </div>

      {/* Main Home Body  */}
      <div ref={scrollRef} className="pb-2 flex-1 h-screen overflow-y-scroll">
        {/* <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins />} />
        </Routes> */}
        <Pins />
      </div>
    </div>
  );
};

export default Home;
