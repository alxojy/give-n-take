import React,{useState} from "react";
import Catalog from "./Catalog";

const ItemCatalog = props => {
    const {data, addHandler} = props;
    return(<Catalog type = "item" data = {data} addHandler = {addHandler}/>)
}
export default ItemCatalog;
