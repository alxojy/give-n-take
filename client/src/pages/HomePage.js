import React, { useState, useEffect } from 'react';
import {withStyles} from "@material-ui/core";
import { Grid, Typography, Card, CardContent, Button } from "@material-ui/core";
import NavBar from '../components/Navigation/Header';

import { Accessibility, Build, Policy } from '@material-ui/icons';

// images
import banner from '../assets/home_page.jpg';
import req1 from '../assets/req1.jpg';
import req2 from '../assets/req2.jpg';
import req3 from '../assets/req3.jpg';


import * as requestAPI from '../api/requests';

const style = theme => ({
    pageHeader:{
        marginBottom:theme.spacing(2)
    },
    banner: {
        width: '100%'
    },
    cardContainer: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    title: {
        marginTop: '90px',
        fontWeight: "bold",
        marginBottom: '20px',
    },
    icon: {
        fontSize: 100, 
        color: '#026670'
    },
    footer: {
        width: '100vw',
        marginTop: '80px', 
        height: '150px', 
        backgroundColor: '#026670',
    },
    btn: {
        padding: '10px',
        marginTop: '40px',
        backgroundColor: '#026670',
        color: '#fff',
        margin: '0 auto',

        '&:hover': {
            backgroundColor: 'black',
        }
    }
});

const HomePage = props => {
    const {classes} = props;
    const icons = [
        {
            icon: <Accessibility className={classes.icon} />, 
            title: "Greater reach",
            desc: "Spread your story, inspire others and get support"
        }, 
        {
            icon: <Build className={classes.icon} />,
            title: "Quick setup",
            desc: "Ready to go in under 3 minutes"
        },
        {
            icon: <Policy className={classes.icon} />, 
            title: "100% transparency",
            desc: "Be in charge of where your money is going"
        }];
    const [topRequests, setTopRequests] = useState([]);

    useEffect(() => {
        const getTopThreeRequests = async () => {
            const res = await requestAPI.getAllRequests();
            if (res.status === 200) {
                setTopRequests(res.data.slice(0,3));
            }
        }

        getTopThreeRequests();
    }, []);

    return (
        <>
            <Grid container>
            <div className={classes.pageHeader} />
            <Grid item md={12} lg={12} style={{textAlign: 'center'}}>
                <img src={banner} className={classes.banner} /> 
                <Typography variant="h4" className={classes.title}>Featured Requests</Typography>
            </Grid>

            {
                topRequests.map((request, i) => {
                    return (
                        <Grid item md={3} style={{margin: '0 auto'}}>
                            <Card className={classes.cardContainer}>
                                <img src={i === 0? req1 : i === 1? req2 : req3} style={{height: '30vh', width: '100%'}} alt=""/>
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    {request.title}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {request.desc.length > 40 ? request.desc.substring(0,40) + '...' : request.desc}
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    {request.user.name}
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid >
                    )
                })
            }

            <Grid item md={12} lg={12} style={{textAlign: 'center'}}>
                <Typography variant="h4" className={classes.title}>Why join our community?</Typography>
            </Grid>

            <Grid item md={1} />
            {
                icons.map(icon => {
                    return (
                        <>
                        <Grid item md={1} />
                        <Grid item md={2} style={{textAlign: 'center'}}>
                            <Typography gutterBottom variant="h5" style={{fontWeight: "bold"}}>
                                {icon.title}
                            </Typography>
                            <div style={{margin: '25px auto'}}>
                                {icon.icon}
                            </div>
                            <Typography variant="body1" color="textSecondary"  component="p">
                                {icon.desc}
                            </Typography>
                        </Grid >
                        </>
                    )
                })
            }
            <Grid item md={2} />

            <Button className={classes.btn}>Join Now</Button>

            <Grid item md={12} className={classes.footer} align="center">
                <Typography style={{color: '#fff', marginTop: 95}}>
                &copy; Copyright 2021, Team Error 418
                </Typography>
            </Grid>

            </Grid>

        </>
    )
};

export default withStyles(style)(HomePage);
