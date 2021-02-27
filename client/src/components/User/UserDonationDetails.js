import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    Paper,
    Grid,
} from "@material-ui/core";
import UserDonatedCard from './UserDonatedCard.js';

const UserDonationDetails = ({donationData}) => {
    let renderedList = null;
    console.log(donationData)
    if (donationData) {
        renderedList = donationData.map((data) => {
            return (
                <Grid key={data._id} item sm={4} md={3}>
                    <UserDonatedCard data={data}/>

                </Grid>
            )
        })
    }

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
                    <Grid container spacing={4}>
                        {renderedList}
                    </Grid>
                </CardContent>
        </Card>
    )
}

export default UserDonationDetails;