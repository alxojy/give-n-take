import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Grid,
    Divider,
} from "@material-ui/core";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Item from "../Item/Item";

const RequestDetail = ({ request }) => {
    return (
        <Card>
            <Grid container spacing = {3}>
                <Grid container item xs={12}>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            height="260"
                            className="card-image"
                        // image={product.media.source}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CardContent className="content">
                            <Typography
                                className="title"
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {request.request_title}
                            </Typography>

                            <Typography
                                gutterBottom
                                component="h2"
                            >
                                {request.request_desc}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>

                <Grid containter item xs={12} >
                <Divider variant="middle" />

                    <CardContent className="content">
                        <Typography
                            className="title"
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            Requests
                         </Typography>
                        <Grid container spacing={4}>

                            {request.request_items.map(item => (
                                <Grid key={item.id} item xs={6} sm={4} md={3} lg = {2}>
                                    <Item item={item} asRequest = {true}/>
                                </Grid>
                            ))}
                        </Grid>

                    </CardContent>

                </Grid>
            </Grid>
        </Card >
    );
};

export default RequestDetail;
