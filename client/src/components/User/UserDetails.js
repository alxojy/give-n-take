import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        // width: '350px',
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

const UserDetails = ({userData}) => {
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
                <Typography
                    className="title"
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    {userData.name}
                </Typography>
                <Typography className={classes.title} gutterBottom>

                    Email: {userData.email}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default UserDetails;