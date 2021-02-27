import React from 'react'
import {withStyles} from "@material-ui/core";
import NavBar from '../components/Navigation/Header';
import TemporaryTabs from '../components/Navigation/TemporaryTabs';

const style = theme => ({

    pageHeader:{
        padding:theme.spacing(7),
        marginBottom:theme.spacing(2)
    },
});

const HomePage = props => {
    const {classes} = props;

    return (
        <div className={classes.pageHeader}>
        <NavBar/>
        <TemporaryTabs/>
        </div>
    )
};

export default withStyles(style)(HomePage);
