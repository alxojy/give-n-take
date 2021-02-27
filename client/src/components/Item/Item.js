import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Grid,
} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'; import "./item.css";

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
                        <Grid container item xs={12}>
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
<<<<<<< HEAD
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
=======
                </Typography>
                <Button
                    size="large"
                    className="button"
                    onClick={() => {
                        console.log('button click')
                    }}
                >
                    <ShoppingBasketIcon /> Add to basket
              </Button>
            </div >
      </Card >
    );
  };
>>>>>>> b23d0cd57bb07e78ae4a34f1c17b1c201370c2b6

export default Item;
