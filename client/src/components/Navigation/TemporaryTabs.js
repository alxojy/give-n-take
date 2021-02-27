import React,{useState} from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import RequestData from '../../dummyData/requestData.json';
import ItemData from '../../dummyData/itemData.json';
import Catalog from "../../components/Catalog";
import RequestDetail from "../Request/RequestDetail";
import RequestForm from "../Forms/RequestForm";
import UserIndex from '../User/UserIndex.js';
import SignUpForm from "../Forms/SignUpForm";


// Data
import UserData from '../../hooks/UserAPI.js';
import ItemList from '../../api/items';
import { getAllItems } from "../../api/items";
import Spinner from "../Spinner/Spinner";
import ItemCatalog from "../ItemCatalog.js/ItemCatalog";

const TemporaryTabs = props => {

const [selectedTab, setSelectedTab] = useState(0);
const [userData] = UserData(null);
const [itemList] = ItemList(null);

const handleChange = (event, newValue) => {
// history.push(`/home/${tabNameToIndex[newValue]}`);
setSelectedTab(newValue);
};


return (
<>
<AppBar position="static" color="transparent">
<Tabs value={selectedTab} onChange={handleChange}>
<Tab label="Item Catalog" />
<Tab label="Requests List" />
<Tab label="Request Details" />
<Tab label="New Request Form" />
<Tab label="User" />
<Tab label="Sign Up Form" />
</Tabs>
</AppBar>

{selectedTab === 0 && (itemList ? <ItemCatalog data = {itemList}/> : <Spinner/>) }
{selectedTab === 1 && <Catalog type = "request" data = {RequestData.requests}/>}
{selectedTab === 2 && <RequestDetail request = {RequestData.request}/>}
{selectedTab === 3 && <RequestForm/>}
{selectedTab === 4 && <UserIndex userData={userData[0]}/>}
{selectedTab === 5 && <SignUpForm/>}
{selectedTab === 6 && <SignUpForm/>}
</>
);
};

export default TemporaryTabs;