import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import GetStarted from "./Pages/GetStarted/GetStarted";
import { useContext, useEffect } from "react";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
