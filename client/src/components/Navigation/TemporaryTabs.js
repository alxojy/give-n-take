import React,{useState} from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
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

const TemporaryTabs = props => {

const [selectedTab, setSelectedTab] = useState(2);
const [itemList] = ItemList(null);
const [userData, donationDetails, requestDetails] = UserData(null);

const handleChange = (event, newValue) => {
// history.push(`/home/${tabNameToIndex[newValue]}`);
setSelectedTab(newValue);
};


return (
<>
<AppBar position="static" color="transparent">
<Tabs value={selectedTab} onChange={handleChange}>
<Tab label="Home" />
<Tab label="Item Catalog" />
<Tab label="Request Details" />
<Tab label="New Request Form" />
<Tab label="User" />
<Tab label="Sign Up Form" />
<Tab label="Donation Page" />
</Tabs>
</AppBar>

{selectedTab === 0 && <HomePage />}
{selectedTab === 1 && <Catalog type = {"item"} data = {ItemData.items}/>}
{selectedTab === 2 && <RequestDetail request = {RequestData.request}/>}
{selectedTab === 3 && <RequestForm/>}
{selectedTab === 4 && <UserIndex userData={userData} donationData={donationDetails} requestData={requestDetails}/>}
{selectedTab === 5 && <SignUpForm/>}
{selectedTab === 6 && <DonationPage/>}
</>
);
};

export default TemporaryTabs;