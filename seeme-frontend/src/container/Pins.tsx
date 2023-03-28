import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Feed, PinDetail, CreatePin, Search } from "../components";
import { user } from "../types";

const Pins = ({ user }: { user: user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user && user}
        />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/pin-detail/:pinId" element={<PinDetail />} />
          <Route path="/create-pin" element={<CreatePin />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
