import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import GetStarted from "./Pages/GetStarted/GetStarted";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
