import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div>Hello world</div>

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
