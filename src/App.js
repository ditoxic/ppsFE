import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Lokasi from "./components/Lokasi";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="flex">
          <div className=" w-[300px] min-h-full bg-gray-200">
            <div className="text-6xl font-bold pt-5 pl-6">PPBS</div>
            <div className="pl-6 mt-6 text-xl font-bold hover:bg-gray-50 hover:pt-2 duration-300">
              <Link to="/gudang">Gudang</Link>
            </div>
            <div className="pl-6 mt-3 text-xl font-bold hover:bg-gray-50 hover:pt-2 duration-300">
              <Link to="/lokasi">Lokasi</Link>
            </div>
          </div>
          <div>
            <div className="content">
              <Routes>
                <Route path="/gudang" element={<Home />} />
                <Route path="/lokasi" element={<Lokasi />} />
                <Route path="/" element={<Home />} />{" "}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
