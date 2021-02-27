import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


const UserDonatedCard = ({userData}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                    component="img"
                    height="260"
                    className="card-image"
                // image={product.media.source}
                />
            <CardContent className="content">
                <Typography className={classes.title} gutterBottom>
                    Receiver: pepeg
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    Donated amount: RM100
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    Donated items amount: 100
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

export default UserDonatedCard;