import axios from 'axios';

const url = 'http://localhost:5000/requests';

export const getAllRequests = () => axios.get(url);
export const getRequest = (id) => axios.get(`${url}/${id}`);
export const getRequestsByUser = (id) => axios.get(`${url}/user/${id}`);
//  example newRequest object: { {"title": "request", "desc": "desc", "items":[] }
export const createRequest = (user, newRequest) => axios.post(`${url}/${user}`, newRequest);


