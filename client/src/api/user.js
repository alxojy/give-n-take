import axios from 'axios';

const url = 'http://localhost:5000/user';

export const getUserDetails = (id) => axios.get(`${url}/${id}`);
export const getUserByType = (type) => axios.get(`${url}/type/${type}`);
// example newUser object: { bio, image, type, name, email, dob, isDonor, addr, occupation }
export const saveUserDetails = (newUser) => axios.post(url, newUser);