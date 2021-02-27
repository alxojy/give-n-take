import React,{useState} from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Item from "./Item/Item";
import ItemCatalog from "../pages/ItemCatalog";


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
        </Tabs>
      </AppBar>

      {selectedTab === 0 && <ItemCatalog/>}
      {selectedTab === 1 && <ItemCatalog/>}

    </>
  );
};

export default TemporaryTabs;
