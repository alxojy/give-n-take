import { useState, useEffect } from 'react';
import axios from 'axios';

const UserAPI = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [donationDetails, setDonationDetails] = useState(null);
    

    useEffect(() => {
        getUserDetails();
        getDonationDetails();
    }, [])

    const getUserDetails = async () => {
        const response = await axios.get('http://localhost:5000/user/000000000000000000000001')
        setUserDetails(response.data)
    }

    const getDonationDetails = async () => {
        const response = await axios.get('http://localhost:5000/donation/user/000000000000000000000001')
        setDonationDetails(response.data)
        console.log(response.data)
    }

    return [userDetails, donationDetails];
}

export default UserAPI;