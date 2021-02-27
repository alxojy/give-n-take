import { useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    Grid,
    Box,
    LinearProgress
} from "@material-ui/core";
import PropTypes from 'prop-types';
import "./detailedRequest.css";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};


const Request = (props) => {

    const [val, setVal] = useState(Math.random() * 100);

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
                        <Grid container justify="space-between">  
                            <Typography className="title name" inline="true" variant="overline" align="left">{props.request.user.name}</Typography>
                            <Typography className="title date" inline="true" variant="overline" align="right">{props.request.requestDate.substring(0, 10)}</Typography>
                        </Grid>
                    <Box p={1}>
                      <Typography
                          className="title"
                          gutterBottom
                          variant="h6"
                          component="h2"
                      >
                          {props.request.title}
                      </Typography>
                      <Box className="descBox">
                          <Typography
                              className="title"
                              gutterBottom
                              variant="subtitle1"
                              component="h2"
                          >
                              {props.request.desc}
                          </Typography>
                      </Box>
                    </Box>
                    <Box p={1}>
                        <LinearProgressWithLabel variant="determinate" value={val}/>
                    </Box>
                </CardContent>
            </CardActionArea>
      </Card >
    );
  };

export default Request;
