import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Student from "./components/Student";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          {/* <Switch>
            <Route path="/studenten" exact component={Studenten} />
          </Switch> */}
          <Switch>
            <Route path="/:studentNaam" component={Student} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
