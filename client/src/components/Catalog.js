import { Grid, Container } from "@material-ui/core";
import Item from "../components/Item/Item";
import Request from "../components/Request/Request";

const Catalog = ({type,data}) => {
    console.log(`catalog ${JSON.stringify( data)}`)
    return (
        <div>
            <Container >
                <Grid container spacing={4}>
                    {data.map((cur) =>
                    (
                        <Grid key={cur.id} item xs={12} sm={6} md={4}>
                            {type === "item" ? <Item item={cur} /> :  <Request request={cur} />}
                        </Grid>
                    )

                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default Catalog;
