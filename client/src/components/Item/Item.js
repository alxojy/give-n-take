import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Grid,
    Chip,
    Divider,
} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./item.css";
import imgPath from '../../img/cutiecompact.jpg'

const Item = ({ item, asRequest, newRequest, addHandler, onChange }) => {

    // console.log(`${JSON.stringify(item)}, ${item.item.name}`)
    return (
        <Card className="item-card">
            <CardMedia
                component="img"
                height="200"
                className="card-image"
                image={imgPath}
            />
            <CardContent className="content">
                <Typography
                    className="title"
                    color="primary"
                    gutterBottom
                    variant="h6"
                    component="h2"
                >
                    {item.name}
                </Typography>

                {asRequest &&
                    <>
                        <Divider />
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
                                // component="h2"
                                >
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
                                    color="primary"
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

                {newRequest &&
                    <>
                        <Divider />
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={12}>
                                <Typography
                                    className="price"
                                    gutterBottom
                                // component="h2"
                                >
                                    {`RM${item.price}`}
                                </Typography>
                            </Grid>

                            <Grid container item xs={12} className="center">
                                <Grid item xs={3}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="outlined"
                                        className="increase-product-quantity"
                                        onClick={() => onChange.fn.increment(onChange.index)}
                                    >
                                        +
                                </Button>
                                </Grid>
                                <Grid item xs={2} >
                                    <Typography className="center">{onChange.fn.selectedQuantity[onChange.index]}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="outlined"
                                        onClick={() => onChange.fn.decrement(onChange.index)}
                                    >
                                        -
                                </Button>
                                </Grid>
                            </Grid>


                            <Grid item xs={12} className="center">
                                <Button
                                    size="large"
                                    className="button"
                                    color="primary"
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

                {(!asRequest && !newRequest) && <>
                    <Chip
                        size="small"
                        label={item.type}
                        color="primary"
                    />
                    <Typography
                        className="price"
                        gutterBottom
                        // variant="h5"
                        component="h2"
                    >
                        {`RM${item.price}`}
                    </Typography></>}

            </CardContent>

            {(!asRequest && !newRequest) && <><Button
                size="large"
                className="button"
                color="primary"
                onClick={() => {
                    // console.log('button click')
                    addHandler()
                }}
            >
                <AddCircleOutlineIcon /> Add to request
              </Button>
            </>}
        </Card >
    );
};

export default Item;
