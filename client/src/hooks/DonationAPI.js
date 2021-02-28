import { useState, useEffect } from 'react';
import { getAllRequests } from '../api/requests'
import axios from 'axios';

const DonationAPI = () => {
    const [requests, setRequests] = useState(null);

    useEffect(() => {
        getRequests();
    }, [])

    const getRequests = async () => {
        const response = await getAllRequests()
        setRequests(response.data)
        console.log(response.data)
    }

    return requests;
}

export default DonationAPI;