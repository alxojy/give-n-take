import { Grid, Container } from "@material-ui/core";
import Item from "../Item/Item";
import Request from "../Request/Request";

const Catalog = ({type,data,addHandler,changeQuantityHandler}) => {
    // console.log(`catalog ${JSON.stringify( data)}`)
    return (
        <div>
            <Container >
                <Grid container spacing={4}>
                    {data.map((cur,i) =>
                    (
                        <Grid key={cur.id} item xs={12} sm={6} md={4}>
                            {type === "item" && <Item item={cur} addHandler = {() => addHandler(cur)} /> }
                            {type === "request" &&  <Request request={cur} />}
                            {type === "item-as-request" &&   <Item item={cur} asRequest = {true}/>}
                            {type === "new-item-request" &&   <Item item={cur} newRequest = {true} onChange = {{fn : changeQuantityHandler,index: i}}/>}
                        </Grid>
                    )
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default Catalog;
