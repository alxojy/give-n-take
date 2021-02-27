import { Avatar, Button, Grid, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import imgPath from '../../img/cutiecompact.jpg'

const RequestItem = (item) => {
    return (<ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={imgPath} />
        </ListItemAvatar>
        <ListItemText
            primary={item.name}
            secondary={item.price}
        />
        <ListItemSecondaryAction>
            <Grid container item xs={12} className="center">
                <Grid item xs={3}>
                    <Button
                        size="small"
                        variant="outlined"
                        className="increase-product-quantity"
                        onClick={() => console.log('increase')}
                    >
                        +
                                </Button>
                </Grid>
                <Grid item xs={2} >
                    <Typography className="center">&nbsp;{2}&nbsp;</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        size="small"
                        color="secondary"
                        variant="outlined"
                        onClick={() => console.log('decrease')}
                    >
                        -
                                </Button>
                </Grid>
                </Grid>
            </ListItemSecondaryAction>
    </ListItem>);
};

export default RequestItem;
