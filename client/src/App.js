import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {
  // console.log(RequestsData.requests)
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
