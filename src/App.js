import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GetStarted from "./Pages/GetStarted/GetStarted";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import About from "./Pages/About/About";
import { RequireAuth } from "./components/ProtectedRoutes/RequireAuth";
import { LoggedUser } from "./components/ProtectedRoutes/LoggedUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <LoggedUser>
                <GetStarted />
              </LoggedUser>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/categories"
            element={
              <RequireAuth>
                <Categories />
              </RequireAuth>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
