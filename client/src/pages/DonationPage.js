import React from 'react'
import { Grid, withStyles, Typography, Box } from "@material-ui/core";
import NavBar from '../components/Navigation/Header';
import TemporaryTabs from '../components/Navigation/TemporaryTabs';
import Catalog from "../components/Catalog";
import RequestData from '../dummyData/requestData.json';
import DonationData from '../hooks/DonationAPI.js';
import "./DonationPage.css";

import banner from '../assets/donation_page.png';

const style = theme => ({
    pageHeader:{
        marginBottom:theme.spacing(2)
    },
    banner: {
        width: '100%'
    },
    title: {
        marginTop: '90px',
        fontWeight: "bold",
        marginBottom: '20px',
    }
});

const DonationPage = props => {
    const donationData = DonationData(null);
    const {classes} = props;
    console.log(donationData)

    return donationData? (
        <Grid container>
            <div className={classes.pageHeader}>
                <Grid item md={12} lg={12} style={{textAlign: 'center'}}>
                    <img src={banner} className={classes.banner} /> 
                    <Typography variant="h4" className={classes.title}>Pending Requests</Typography>
                </Grid>
                <Box p={5}>
                    <Catalog type={"request"} data ={donationData}/>            
                </Box>
            </div>
        </Grid>
        ): (
        <div>
            {"Loading"}
        </div>
        
    )
};

export default withStyles(style)(DonationPage);
