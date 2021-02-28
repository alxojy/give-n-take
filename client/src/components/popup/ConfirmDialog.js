/** 
 * Description : 
 * Comfirm Diaglog Component 
 * 
 * Resource :
 * https://www.youtube.com/watch?v=m-2_gb_3L7Q&ab_channel=CodAffection
 * https://github.com/CodAffection/Create-React-Material-UI-Confirm-Dialog-Notification
 */

import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, withStyles, IconButton } from '@material-ui/core'
import Controls from "../Controls/Controls";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const style = theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
});

const confirmDialog = props => {
    
    const { confirmDialog, setConfirmDialog, classes } = props;

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <DeleteForeverIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                    text="No"
                    color="default"
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} />
                <Controls.Button
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm} />
            </DialogActions>
        </Dialog>
    )
};

export default withStyles(style)(confirmDialog);