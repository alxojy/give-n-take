import React,{useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import RequestData from '../../dummyData/requestData.json';
import ItemData from '../../dummyData/itemData.json';
import Catalog from "../../components/Catalog";
import HomePage from "../../pages/HomePage";
import RequestDetail from "../Request/RequestDetail";
import RequestForm from "../Forms/RequestForm";
import UserIndex from '../User/UserIndex.js';
import SignUpForm from "../Forms/SignUpForm";


// Data
import UserData from '../../hooks/UserAPI.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tabs: {
    flexGrow: 1,
  },
  user: {
    flexGrow:1 ,
    marginRight: '10px',
  }
}));

const TemporaryTabs = props => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [userData, donationDetails, requestDetails] = UserData(null);

const handleChange = (event, newValue) => {
// history.push(`/home/${tabNameToIndex[newValue]}`);
setSelectedTab(newValue);
};

return (
<>
<div className={classes.root}>
  <AppBar position="static" color="transparent">
    <Toolbar className={classes.tabs}>

      <Tabs value={selectedTab} onChange={handleChange}>
      <Tab label="Home" />
      <Tab label="Item Catalog" />
      <Tab label="Requests List" />
      <Tab label="Request Details" />
      <Tab label="New Request Form" />
      <Tab label="Sign Up Form" value={6}/>
      </Tabs>
      
      <Typography
          className="title"
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.user}
      >
      </Typography>
      <Button color="inherit"
        onClick={() => { setSelectedTab(5);}}>Welcome, {userData ? userData.name : null}</Button>
    </Toolbar>
  </AppBar>

</div>

{selectedTab === 0 && <HomePage />}
{selectedTab === 1 && <Catalog type = {"item"} data = {ItemData.items}/>}
{selectedTab === 2 && <Catalog type = {"request"} data = {RequestData.requests}/>}
{selectedTab === 3 && <RequestDetail request = {RequestData.request}/>}
{selectedTab === 4 && <RequestForm/>}
{selectedTab === 5 && <UserIndex userData={userData} donationData={donationDetails} requestData={requestDetails}/>}
{selectedTab === 6 && <SignUpForm/>}
</>
);
};

export default TemporaryTabs;