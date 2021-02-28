import { useState, useEffect } from 'react';
import axios from 'axios';

const UserAPI = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [donationDetails, setDonationDetails] = useState(null);
    const [requestDetails, setRequestDetails] = useState(null);

    let userID = '000000000000000000000001';

    useEffect(() => {
        getUserDetails();
        getDonationDetails();
        getRequestDetails();
    }, [])

    const getUserDetails = async () => {
        const response = await axios.get(`http://localhost:5000/user/${userID}`)
        setUserDetails(response.data)
    }

    const getDonationDetails = async () => {
        const response = await axios.get(`http://localhost:5000/donation/user/${userID}`)
        setDonationDetails(response.data)
    }

    const getRequestDetails = async () => {
        const response = await axios.get(`http://localhost:5000/requests/user/${userID}`)
        setRequestDetails(response.data)
    }

    return [userDetails, donationDetails, requestDetails];
}

export default UserAPI;