import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    Paper,
} from "@material-ui/core";
import UserDonatedCard from './UserDonatedCard.js';

const UserDonationDetails = ({userData}) => {
    return (
        <Card className="userdetails-card">
                <CardContent className="content">
                    <Typography
                        className="title"
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        Donation History
                    </Typography>

                    <UserDonatedCard />
                </CardContent>
        </Card>
    )
}

export default UserDonationDetails;