import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

import HomePage from "./pages/HomePage";
import theme from "./components/theme"

function App() {
  // console.log(RequestsData.requests)
  return (
    <ThemeProvider theme={theme}> 
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
    </ThemeProvider>

  );
}

export default App;
