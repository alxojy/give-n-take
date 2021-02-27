import React from 'react'
import { AppBar, Toolbar, Grid, IconButton, Badge, withStyles } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const style = () => ({
    root: {
        backgroundColor: '#fff',
    },
} 
);

const Header = props => {
    const { classes } = props;

    return (
        // <AppBar position="static" className={classes.root}>
        <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
                <Grid container alignItems="center">
                <Grid item sm></Grid>


                <Grid item>
                <div className="basket-wrapper">
                <IconButton
                //   component={Link}
                  to="/basket"
                  aria-label="Show basket contents"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
                </IconButton>
              </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(style)(Header);