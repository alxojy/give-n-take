import { 
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    Paper, } from "@material-ui/core";

const UserRequestDetails = ({userData}) => {
    return (
        <Card className="userdetails-card">
                <CardContent className="content">
                    <Typography
                        className="title"
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        Request History
                    </Typography>
                </CardContent>
        </Card>
    )
}

export default UserRequestDetails;