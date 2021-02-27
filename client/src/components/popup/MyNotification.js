/** 
 * Code By : Hew Ye Zea
 * Last Modified : 20/2/2021
 * 
 * Description : 
 * A modified version of Notification from the youtube tutorial linked below.
 * My notification can handle custom messages & error messages ( results from API requests ) 
 * 
 * Resource :
 * https://www.youtube.com/watch?v=m-2_gb_3L7Q&ab_channel=CodAffection
 * https://github.com/CodAffection/Create-React-Material-UI-Confirm-Dialog-Notification
 * 
 */ 
import React from 'react'
import { Snackbar, withStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// potential improvement : allow stacking
// https://material-ui.com/components/snackbars/
// https://github.com/iamhosseindhv/notistack

const style = theme => ({
    root: {
        top: theme.spacing(9)
    }
});

const notification = props => {
    const { notify, setNotify,classes} = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    // determine the type of notification needed based on the result of the API request
    const determineNotification = (result) => {
        let retVal;
        // //console.log(`inside determine notification type ${JSON.stringify(result)}`)
        if (result.outcome){
            retVal = {
            message: 'Successfully insert/update database! Please refresh the page.',
            type :"success"
            }
        }
        else{
            const {error} = result;
            const msg = error.join('\n');
            retVal = {             
            message: msg,
            type :"error"
            }
        }
    return retVal;
    }   

    // //console.log(`determine notification type ${JSON.stringify(notify.result)}`)
    // //console.log(`notify ${JSON.stringify(notify)}`)
    
    // if result is passed in , determine the type of notification
    // else , use the message passed in as props
    const {message,type} = notify.result ?  determineNotification(notify.result) : { message: notify.message,type: notify.type};

    // duration of error message is 10 seconds
    const duration = type === "error" ? 10000 : 3000;

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={duration}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={handleClose}>
            <Alert
                severity={type}
                onClose={handleClose}>
                {message}
            </Alert>
        </Snackbar>
    )
};

export default withStyles(style)(notification);
