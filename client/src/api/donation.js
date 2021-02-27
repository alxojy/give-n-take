import axios from 'axios';

const url = 'http://localhost:5000/donation';

export const getDonationDetails = (id) => axios.get(`${url}/${id}`);
export const getAllDonationsByUser = (id) => axios.get(`${url}/user/${id}`);
// example newDonation Object: 
// { "donor": "000000000000000000000001", "request": "000000000000000000000001", items: [{"_id":"000000000000000000000001", "quantity": 1}] }
export const createDonation = (newDonation) => axios.post(url, newDonation);
// example updatedDonation Object: { "id": "000000000000000000000001", "image": "2" }
export const addDonationStatus = (id, updatedDonation) => axios.post(`${url}/${id}`, updatedDonation);