// Styling
import "./App.css";

// Components
import BpmCounter from "./components/BpmCounter/BpmCounter";
import Tuner from "./components/Tuner/Tuner";
import Navbar from "./components/Navbar/Navbar";

// Dependencies
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
              {/* TODO: Home Page */}
            </Route>
            <Route exact path="/bpm-counter">
              <BpmCounter />
            </Route>
            <Route exact path="/tuner">
              <Tuner />
            </Route>
            <Route exact path="/about">
              {/* TODO: About */}
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
