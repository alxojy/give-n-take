import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '200px',
        // minWidth: 275,
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    title: {
      fontSize: 14,
    },
    // pos: {
    //   marginBottom: 12,
    // },
  });


const UserRequestedCard = ({data}) => {
    const classes = useStyles();
    // const [receiver, setReceiver] = useState(null);
    // const [donation, setDonation] = useState(null);
    // const [donationAmt, setDonationAmt] = useState(0);

    // useEffect(async () => {
    //     const receiverRes = await axios.get(`http://localhost:5000/user/${data.request.user}`)
    //     setReceiver(receiverRes.data)

    //     const donationRes = await axios.get(`http://localhost:5000/donation/${data._id}`)
    //     setDonation(donationRes.data)
    //     let totalAmt = 0;
    //     donationRes.data.donationItem.map(item => {
    //         console.log(item)
    //         let amt = item.quantity * item.item.price;
    //         totalAmt += amt;
    //     })
    //     setDonationAmt(totalAmt);
    // }, [data])

    return (
        <Card className={classes.root}>
            <CardMedia
                    component="img"
                    height="150"
                    className="card-image"
                // image={product.media.source}
                />
            <CardContent className="content">
                <Typography
                    className="title"
                    gutterBottom
                    variant="h6"
                    component="h2"
                >
                    {data.title}
                </Typography>

                {/* <Typography className={classes.title} gutterBottom>
                    Receiver: {receiver ? receiver.name : null}
                </Typography> */}
                {/* <Typography className={classes.title} gutterBottom>
                    Donated amount: RM{donationAmt}
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    Donated items amount: {donation ? donation.donationItem.length : 0}
                </Typography> */}
                <Typography className={classes.title} gutterBottom>
                    Date: {data.requestDate.substring(0, 10)}
                </Typography>
            </CardContent>
        </Card>
        // <Paper>
        //     <div style-={{padding: '10px'}}>
        //         <Typography
        //                     className="title"
        //                     gutterBottom
        //                     variant="h5"
        //                     component="h2"
        //                 >
        //                     Donation
        //         </Typography>

        //     </div>
        // </Paper>
    )
}

export default UserRequestedCard;