import React from 'react'
import { Grid, withStyles, Typography, Box } from "@material-ui/core";
import NavBar from '../components/Navigation/Header';
import TemporaryTabs from '../components/Navigation/TemporaryTabs';
import Catalog from "../components/Catalog";
import RequestData from '../dummyData/requestData.json';

import banner from '../assets/donation_page.png';
import Spinner from '../components/Spinner/Spinner';
import UserIndex from '../components/User/UserIndex';

import UserData from '..//hooks/UserAPI.js';

const style = theme => ({
    root : {
        backgroundColor : `#eee`
    },
    pageHeader:{
        marginBottom:theme.spacing(2)
    },
    banner: {
        width: '100%'
    },
    title: {
        marginTop: '50px',
        fontWeight: "bold",
        marginBottom: '20px',
    }
});

const UserProfile = props => {
    const {classes} = props;
    const [userData, donationDetails, requestDetails] = UserData(null);


    return userData? (
        <Grid container className={classes.root}>
            <div className={classes.pageHeader} >
                <Grid item md={12} lg={12} style={{textAlign: 'center'}}>
                    {/* <img src={banner} className={classes.banner} />  */}
                </Grid>
                <Box p={5}>
                <UserIndex userData={userData} donationData={donationDetails} requestData={requestDetails}/>            
                </Box>
            </div>
        </Grid>
        ): <Spinner/>
};

export default withStyles(style)(UserProfile);
