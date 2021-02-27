import { useState, useEffect } from 'react';
import axios from 'axios';

const UserAPI = () => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const response = await axios.get('http://localhost:5000/dummy/User')
        setUserDetails(response.data)
        console.log(response.data)
    }

    return [userDetails];
}

export default UserAPI;