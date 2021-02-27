import React,{useState} from "react";
import Catalog from "../Catalog";

const ItemCatalog = props => {
    const {data} = props;
    return(<Catalog type = "item" data = {data}/>)
}
export default ItemCatalog;
