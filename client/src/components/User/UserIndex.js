import React from 'react';
import UserDetails from './UserDetails.js';
import UserDonationDetails from './UserDonationDetails.js';
import UserRequestDetails from './UserRequestDetails.js';

import { Grid } from "@material-ui/core";

const UserIndex = ({userData, donationData}) => {
    return (
        <div style={{ padding: 20 }}>
            <Grid container spacing={3}>
                {/* <div style={{ padding: 20 }}> */}
                    <Grid item xs={4}>
                        <UserDetails userData={userData}/>

                    </Grid>
                {/* </div> */}
                <Grid item xs={8}>
                    <Grid item xs spacing={3}>

                    <UserDonationDetails donationData={donationData}/>
                    </Grid>
                    <Grid item xs>
                        <div style={{paddingTop: '10px'}}>
                            <UserRequestDetails userData={userData}/>
                            
                        </div>    
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}

export default UserIndex;