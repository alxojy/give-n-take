import axios from 'axios';

const url = 'http://localhost:5000/cash_donations';

export const getCashDonationsByUser = (id) => axios.get(`${url}/${id}`);
// example newCashDonation object: { receiver, amount }
export const createCashDonation = (user, newCashDonation) => axios.post(`${url}/${user}`, newCashDonation);
