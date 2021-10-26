// Styling
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="container">
      <div id="navbar">
        <Navbar />
      </div>
      <div>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
