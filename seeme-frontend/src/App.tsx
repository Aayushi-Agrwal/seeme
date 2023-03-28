import { Routes, Route } from "react-router-dom";
import { UserProfile } from "./components";
import Login from "./components/Login";
import Home from "./container/Home";
import Pins from "./container/Pins";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
