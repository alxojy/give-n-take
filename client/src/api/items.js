import axios from 'axios';

const url = 'http://localhost:5000/items/';

export const getAllItems = () => axios.get(url);
