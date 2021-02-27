import { useState } from 'react';
import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Divider,
    Container,
    withStyles,
    Box
} from "@material-ui/core";
import NavBar from '../components/Navigation/Header';
import TemporaryTabs from '../components/Navigation/TemporaryTabs';
import Catalog from "../components/Catalog";
import Item from "../components/Item/Item";
import DetailedRequest from "../components/Request/DetailedRequest";
import Button from "../components/Controls/Button";
import RequestData from '../dummyData/requestData.json';
import DonationData from '../hooks/DonationAPI.js';
import "./DonationPage.css";

import banner from '../assets/donation_page.png';
import Modal from 'react-modal';

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
    
    const [popUpOpen, setPopUpOpen] = useState(false);
    const [activeRequest, setActiveRequest] = useState(0);

    const openPopUp = (id) => {
        setActiveRequest(id);
        setPopUpOpen(true);
    }

    const closePopUp = () => {
        setPopUpOpen(false);
    }

    console.log(donationData)


    return donationData? (
        <Grid container>

            <Modal
                isOpen={popUpOpen}
                onRequestClose={() => {setPopUpOpen(false);}}
                contentLabel="xx"
            >   
                    <Card style={{ border: "none", boxShadow: "none", margin: "50px 100px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> 
                        <Grid>
                            <Grid container item className="title-wrapper">
                                <Grid item xs={10} md={4}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        className="card-image"
                                    // image={product.media.source}
                                    />
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <CardContent className="content">
                                        <Typography
                                            className="title"
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {donationData[activeRequest].title}
                                        </Typography>

                                        <Typography
                                            gutterBottom
                                            component="h2"
                                        >
                                            {donationData[activeRequest].desc}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>

                            <Grid containter item xs={11} style={{ marginLeft: "22px", marginTop: "20px"}} >
                                <Container>
                                <Card>
                                <CardContent className="content" >
                                    <Typography
                                        className="title"
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        style={{ marginTop: "16px", marginBottom: "30px" }}
                                    >
                                        Requests
                                     </Typography>
                                    <Grid container spacing={2}>

                                        {donationData[activeRequest].itemRequests.map(item => (
                                            <Grid key={item.name} item xs={6} sm={4} className="request-item-wrapper">
                                                <Item item={item} className="request-item" asRequest = {true}/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </CardContent>
                                </Card>
                                </Container>
                            </Grid>
                        </Grid>

                        <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "300px", marginTop: "40px"}}>
                            <Button onClick={closePopUp} text="Exit" style={{width: "130px"}}></Button>
                            <Button text="Checkout" style={{width: "130px"}}></Button>
                        </Box>
                    </Card >
            </Modal>

            <div className={classes.pageHeader}>
                <Grid item md={12} lg={12} style={{textAlign: 'center'}}>
                    <img src={banner} className={classes.banner} /> 
                    <Typography variant="h4" className={classes.title}>Pending Requests</Typography>
                </Grid>
                <Box p={5}>
                    <div>
                        <Container >
                            <Grid container spacing={2}>
                                {donationData.map((cur, index) =>
                                (
                                    <Grid key={cur.id} item xs={12} sm={6} md={4}>
                                        <DetailedRequest request={cur} openPopUp={openPopUp} id={index}/>
                                    </Grid>
                                )

                                )}
                            </Grid>
                        </Container>
                    </div>
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
