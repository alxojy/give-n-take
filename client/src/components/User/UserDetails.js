import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Chip,
    CardActionArea,
    Button,
    CardActions,
} from "@material-ui/core";
import OccupationIcon from '@material-ui/icons/WorkOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles({
    root: {
        boxShadow: `0px 0px 20px 5px ##f1f8f7`
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

const UserDetails = ({userData}) => {
    const classes = useStyles();
    console.log(userData)
    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                height="260"
                className="card-image"
            // image={product.media.source}
            />
            <CardContent className="content">
                <Chip label={userData.type} />
                <Typography
                    className="title"
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                >
                    {userData.name}
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    <CakeOutlinedIcon color="primary"/> {userData.dob.substring(0, 10)}
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    <MailOutlineIcon color="primary"/> {userData.email}
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    <OccupationIcon color="primary"/> {userData.occupation}
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    <HomeOutlinedIcon color="primary"/> {userData.addr}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default UserDetails;