import { Grid, Container } from "@material-ui/core";
import Request from "../Request/Request";
import Spinner from "../Spinner/Spinner";
// import Banner from "../Banner";
import "./style.css";

const Requests = ({ requests, addProduct }) => {
  if (!requests || !requests.length) return <Spinner />;

  return (
    <div>
      {/* <Banner /> */}
      <Container id="requests">
        <Grid container spacing={4}>
          {requests.map((request) => (
            <Grid key={request.request_id} item xs={12} sm={6} md={4}>
              <Request request={request} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Requests;