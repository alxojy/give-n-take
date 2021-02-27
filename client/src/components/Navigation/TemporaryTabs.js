import React,{useState} from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import ItemCatalog from "../pages/ItemCatalog";
import Requests from "../pages/Requests";
import RequestData from '../../dummyData/requestData.json';
import ItemData from '../../dummyData/itemData.json';
import Catalog from "../pages/Catalog";


const TemporaryTabs = props => {

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    // history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Item Catalog" />
          <Tab label="Request Catalog" />
          <Tab label="Reusable Catalog" />
        </Tabs>
      </AppBar>

      {selectedTab === 0 && <ItemCatalog items = {ItemData.items}/>}
      {selectedTab === 1 && <Requests requests = {RequestData.requests}/>}
      {selectedTab === 2 && <Catalog type = {"item"} data = {ItemData.items}/>}
    </>
  );
};

export default TemporaryTabs;
