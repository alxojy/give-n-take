import React from 'react'
import { AppBar, Toolbar, Grid, IconButton, Badge, withStyles, List, ListItem } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const style = () => ({
    root: {
        backgroundColor: '#fff',
    },
} 
);

const NavBar = props => {
    // const classes = useStyles();

    const { classes } = props;

    return (
      <>
      {/* <Header
            brand="Navbar with profile"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.registerNavLink}
                    onClick={e => e.preventDefault()}
                    color="rose"
                    round
                  >
                    Register
                  </Button>
                </ListItem>
              </List>
            }
          /> */}
        {/* // <AppBar position="static" className={classes.root}> */}
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
        </>
    )
}

export default withStyles(style)(NavBar);