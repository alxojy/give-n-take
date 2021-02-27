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

    if (donationData) {
        renderedList = donationData.map((data) => {
            return (
                <Grid key={data._id} item sm={4} md={3}>
                    <UserDonatedCard data={data}/>

                </Grid>
            )
        })
    } else {
        return (
            <div>Empty</div>
        )
    }

    return (
        <Card className="donatedetails-card">
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