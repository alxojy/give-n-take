import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
// import Requests from './components/Requests/Requests';
// import RequestsData from './dummyData/requestData.json';

function App() {
  // console.log(RequestsData.requests)
  return (
    <Router>
      <div>
        <HomePage/>
        {/* <div>Hello world</div> */}
        {/* <Requests requests={RequestsData.requests}/> */}
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
