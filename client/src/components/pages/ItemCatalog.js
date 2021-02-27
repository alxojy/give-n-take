import { Grid, Container } from "@material-ui/core";
import Item from "../Item/Item";

const ItemCatalog = ({items}) => {
    console.log(items)
    return (
        <div>
            <Container >
                <Grid container spacing={4}>
                    {items.map((item) =>
                    (
                        <Grid key={item.id} item xs={12} sm={6} md={4}>
                            <Item item={item} />
                        </Grid>
                    )

                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default ItemCatalog;
