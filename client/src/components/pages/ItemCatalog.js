import { Grid, Container } from "@material-ui/core";
// import "./style.css";
import Item from "../Navigation/Item/Item";

const ItemCatalog = () => {
    const items = [
        { id: 0, name: `Soap`, price: 10 },
        { id: 1, name: `Rice`, price: 20 },
        { id: 2, name: `Milo`, price: 2 },
        { id: 3, name: `Biscuit`, price: 12 },
        { id: 4, name: `Milk`, price: 123 },
        { id: 5, name: `Onion`, price: 12 },
    ]
    return (
        <div>
            <Container >
                <Grid container spacing={4}>
                    {items.map((item) => {
                        return (
                            <Grid key={item.id} item xs={12} sm={6} md={4}>
                                <Item item={item} />
                            </Grid>
                        )
                    }
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default ItemCatalog;
