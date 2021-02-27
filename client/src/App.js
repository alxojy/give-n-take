import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <HomePage/>
        {/* 
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
        */}
      </div>
    </Router>
  );
}

export default App;
