import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Grid,
    Divider,
    Container,
    withStyles
} from "@material-ui/core";
import Item from "../Item/Item";
import "./requestDetail.css";

const RequestDetail = ({ request }) => {
    return (
        <Card>
            <Grid container>
                <Grid container item className="title-wrapper">
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            height="400"
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
                    <Container maxWidth="md">
                    <CardContent className="content" >
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
                                <Grid key={item.id} item xs={6} sm={4} >
                                    <Item item={item} asRequest = {true}/>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                    </Container>
                </Grid>
            </Grid>
        </Card >
    );
};

export default RequestDetail;
