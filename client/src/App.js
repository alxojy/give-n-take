import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Requests from './components/Requests';
import RequestsData from './dummyData/requestData.json';

function App() {
  console.log(RequestsData.requests)
  return (
    <Router>
      <div>
        {/* <div>Hello world</div> */}
        <Requests requests={RequestsData.requests}/>
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
