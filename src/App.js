import "./App.scss";
import Register from "./components/auth/Register";
import Navbar from "./components/navbar/Navbar";
import GetStarted from "./Pages/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <GetStarted /> */}
      <Register />
    </div>
  );
}

export default App;
