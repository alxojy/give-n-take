import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

import HomePage from "./pages/HomePage";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#026670",
      light: '#9FEDD7'
    },
    secondary: {
      main: "#FCE181",
      light: '#FEF9C7'
    },
    background: {
      default: "#f4f5fd"
    },
  },
})

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
