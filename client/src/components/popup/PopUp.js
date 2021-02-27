
import React from 'react'
import { Dialog, DialogTitle, DialogContent, withStyles, Typography } from '@material-ui/core';
import Controls from "../controls/Controls";
import CloseIcon from '@material-ui/icons/Close';

const style = theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
});

const popUp = props => {
    const { title, children, openPopup, setOpenPopup , classes} = props;

    return (
        <Dialog open={openPopup} minWidth = "lg" maxWidth="xl" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
};

export default withStyles(style)(popUp);