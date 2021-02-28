import React,{useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import RequestData from '../../dummyData/requestData.json';
import ItemData from '../../dummyData/itemData.json';
import Catalog from "../Catalog/Catalog";
import HomePage from "../../pages/HomePage";
import RequestDetail from "../Request/RequestDetail";
import RequestForm from "../Forms/RequestForm";
import UserIndex from '../User/UserIndex.js';
import SignUpForm from "../Forms/SignUpForm";
import DonationPage from "../../pages/DonationPage";


// Data
import UserData from '../../hooks/UserAPI.js';
import ItemList from '../../api/items';
import { getAllItems } from "../../api/items";
import Spinner from "../Spinner/Spinner";
import ItemCatalog from "../Catalog/ItemCatalog";

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
  const [itemList] = ItemList(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [userData, donationDetails, requestDetails] = UserData(null);

const handleChange = (event, newValue) => {
// history.push(`/home/${tabNameToIndex[newValue]}`);
setSelectedTab(newValue);
};

// x
return (
<>

<div className={classes.root}>
  <AppBar position="static" color="transparent">
    <Toolbar className={classes.tabs}>

      <Tabs value={selectedTab} onChange={handleChange}>
      <Tab label="Home" />
      <Tab label="My Account" />
      <Tab label="New Request" />
      <Tab label="Donate" />
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
        onClick={() => { setSelectedTab(3);}}>Welcome, {userData ? userData.name : null}</Button>
    </Toolbar>
  </AppBar>

</div>


{selectedTab === 0 && <HomePage />}
{selectedTab === 1 && <UserIndex userData={userData} donationData={donationDetails} requestData={requestDetails}/>}
{selectedTab === 2 && <RequestForm/>}
{selectedTab === 3 && <DonationPage/>}
</>
);
};

export default TemporaryTabs;