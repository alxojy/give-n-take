import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Grid,
} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./item.css";

const Item = ({ item, asRequest }) => {
    // console.log(`${JSON.stringify(item)}, ${item.item.name}`)
    return (
        <Card className="item-card">
            <CardMedia
                component="img"
                height="260"
                className="card-image"
            // image={product.media.source}
            />
            <CardContent className="content">
                <Typography
                    className="title"
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    {item.name}
                </Typography>

                {asRequest &&
                    <>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={10}>
                                <Typography
                                    className="price"
                                    gutterBottom
                                    component="h2"
                                >
                                    {`Quantity Requested : 2`}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography
                                    className="price"
                                    gutterBottom
                                    component="h2">
                                    {`RM${item.price}`}
                                </Typography>
                            </Grid>

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


                            <Grid item xs={12} className="center">
                                <Button
                                    size="large"
                                    className="button"
                                    onClick={() => {
                                        console.log('button click')
                                    }}
                                >
                                    <ShoppingBasketIcon /> Add to basket
              </Button>
                            </Grid>

                        </Grid>




                    </>


                }

                {!asRequest && <Typography
                    className="price"
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    {`RM${item.price}`}
                </Typography>}

            </CardContent>

            {!asRequest && <Button
                size="large"
                className="button"
                onClick={() => { console.log('button click') }}
            >
                <AddCircleOutlineIcon /> Add to request
              </Button>}
        </Card >
    );
};

export default Item;
