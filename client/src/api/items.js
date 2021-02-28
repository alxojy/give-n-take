import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'http://localhost:5000/items/';


const ItemsAPI = () => {
    const [itemList, setItemList] = useState(null);

    useEffect(() => {
        getAllItems();
    }, [])

    const getAllItems = async () => {
        const response = await axios.get(url)
        setItemList(response.data)
        // console.log(response.data)
    }

    return [itemList];
}
export default ItemsAPI;