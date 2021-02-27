import React from 'react'
import {withStyles} from "@material-ui/core";
import NavBar from '../components/Navigation/Header';
import TemporaryTabs from '../components/Navigation/TemporaryTabs';
import RequestForm from '../components/Forms/RequestForm';

const style = theme => ({

    pageHeader:{
        padding:theme.spacing(7),
        marginBottom:theme.spacing(2),
        backgroundColor : `#eee`
    },
});

const HomePage = props => {
    const {classes} = props;

    return (
        <div className={classes.pageHeader}>
        <NavBar/>
        <RequestForm/>
        </div>
    )
};

export default withStyles(style)(HomePage);
