import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
} from "@material-ui/core";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'; 
import "./item.css";

const Item = ({item}) => {
    // console.log(`${JSON.stringify(item)}, ${item.item.name}`)
    return (
        <Card className="item-card">
            <CardActionArea>
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
                </CardContent>
            </CardActionArea>
            <div className="content">
                <Typography
                    className="price"
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    {`RM${item.price}`}
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

export default Item;
