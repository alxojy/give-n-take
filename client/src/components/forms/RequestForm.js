import React, { useState, useEffect } from 'react'
import { Divider, Grid, Paper, Typography, Container, AppBar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Controls from '../Controls/Controls';
import Toolbar from '@material-ui/core/Toolbar';
import { useForm, Form } from '../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Catalog from '../Catalog/Catalog';
import ItemData from '../../dummyData/itemData.json';
import SearchIcon from '@material-ui/icons/Search';
import ItemList from '../../api/items';
import ItemCatalog from '../Catalog/ItemCatalog';
import Spinner from '../Spinner/Spinner';


const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        marginBottom: 20
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    contentWrapper: {
        margin: '40px 16px',
    },
    container: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    title: {
        marginBottom: theme.spacing(5),
    }
});

const initialFValues = {
    title: '',
    description: '',
}

const RequestForm = (props) => {
    const { classes } = props;
    const [itemList] = ItemList(null);

    const [filteredItem, setFilteredItem] = useState(itemList)

    useEffect(() => {
        setFilteredItem(itemList)
    }, [itemList])

    const [selectedItems, setSelectedItems] = useState([]);

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            console.log(`${JSON.stringify(values)}`)
        }
    }

    const handleSearch = e => {
        let target = e.target;
        console.log(`target ${target.value}`);
        if (!target.value)
            setFilteredItem(itemList);
        else
            setFilteredItem(itemList.filter(x => x.name.toLowerCase().includes(target.value.toLowerCase()) || x.type.toLowerCase().includes(target.value.toLowerCase())))
    }

    const addItems = (item) => {
        console.log(`add items : ${item}`)
        const searchResult = selectedItems.find(({ name }) => name === item.name)
        if (!searchResult) {
            const newSelected = selectedItems.concat(item);
            setSelectedItems(newSelected);
        }

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Container className={classes.container}>

                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >CREATE NEW REQUEST</Typography>

                        <Controls.Input
                            name="title"
                            label="Request Title"
                            value={values.title}
                            onChange={handleInputChange}
                            error={errors.title}
                        />
                        <Controls.Input
                            label="Description"
                            name="description"
                            multiline
                            rows={4}
                            value={values.description}
                            onChange={handleInputChange}
                            error={errors.description}
                        />
                    </Container>

                </Grid>
                <Grid item xs={12}>
                    <Divider />
                    <Container className={classes.container}>

                        <Typography variant="h5" marked="center" className={classes.title} component="h2">
                            REQUEST ITEMS
                            </Typography>

                        {selectedItems.length == 0 ?
                            (<div className={classes.contentWrapper}>
                                <Typography color="textSecondary" align="center">
                                    No items yet. Please select items from the item catalog.
                            </Typography>
                            </div>) : (<>
                                <Catalog type = "new-item-request" data={selectedItems} />
                                <Controls.Button
                                type="submit"
                                text="Submit" />
                                <Controls.Button
                                    text="Reset"
                                    color="default"
                                    onClick={resetForm} /></>)}

                    </Container>

                </Grid>
                <Grid item xs={12}>
                    <Divider />
                    <Container className={classes.container}>

                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >ITEM CATALOG</Typography>

                        <Paper className={classes.paper}>
                            <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                                <Toolbar>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <SearchIcon className={classes.block} color="inherit" />
                                        </Grid>
                                        <Grid item xs>
                                            <TextField
                                                fullWidth
                                                placeholder="Search by item name / type"
                                                InputProps={{
                                                    disableUnderline: true,
                                                    className: classes.searchInput,
                                                }}
                                                onChange={(event) => handleSearch(event)}
                                            />
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <Container maxWidth="md">
                                {filteredItem ? <ItemCatalog data={filteredItem} addHandler={addItems} /> : <Spinner />}
                            </Container>
                        </Paper>
                    </Container>
                </Grid>

            </Grid>
        </Form>
    )
}

export default withStyles(styles)(RequestForm);