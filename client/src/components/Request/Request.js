import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
} from "@material-ui/core";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'; 
import "./request.css";

const Request = (request) => {
    return (
        <Card className="request-card">
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
              {request.request.request_title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className="content">
                {/* <Typography
                    className="price"
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    {`RM${request.request.price}`}
                </Typography> */}
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

export default Request;
