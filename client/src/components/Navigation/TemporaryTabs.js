import React,{useState} from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import RequestData from '../../dummyData/requestData.json';
import ItemData from '../../dummyData/itemData.json';
import Catalog from "../../components/Catalog";
import RequestDetail from "../Request/RequestDetail";


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
          <Tab label="Request Details" />
        </Tabs>
      </AppBar>

      {selectedTab === 0 && <Catalog type = {"item"} data = {ItemData.items}/>}
      {selectedTab === 1 && <Catalog type = {"request"} data = {RequestData.requests}/>}
      {selectedTab === 2 && <RequestDetail request = {RequestData.request}/>}
    </>
  );
};

export default TemporaryTabs;
