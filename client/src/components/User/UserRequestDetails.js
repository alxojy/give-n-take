import { useState, useEffect } from 'react';

import { 
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    Paper,
    Grid, } from "@material-ui/core";
import UserRequestedCard from './UserRequestedCard';

const UserRequestDetails = ({requestData}) => {
    let renderedList = null;
    
    if (requestData) {
        renderedList = requestData.map((data) => {
            return (
                <Grid key={data._id} item sm={4} md={3}>
                    <UserRequestedCard data={data}/>

                </Grid>
            )
        })
    } else {
        return (
            <div>Empty</div>
        )
    }
    return (
        <Card className="requestdetails-card">
                <CardContent className="content">
                    <Typography
                        className="title"
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        Request History
                    </Typography>
                    <Grid container spacing={4}>
                        {renderedList}
                    </Grid>
                </CardContent>
        </Card>
    )
}

export default UserRequestDetails;