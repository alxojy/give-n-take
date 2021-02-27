import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography, } from '@material-ui/core';
import Controls from '../Controls/Controls';
import { useForm, Form } from '../hooks/useForm';


const initialFValues = {
    title: '',
    description: '',
}

const RequestForm = () => {
    // const { addOrEdit, recordForEdit } = props

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

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     if (validate()) {
    //         addOrEdit(values, resetForm);
    //     }
    // }

    // useEffect(() => {
    //     if (recordForEdit != null)
    //         setValues({
    //             ...recordForEdit
    //         })
    // }, [recordForEdit])

    return (
        // <Form onSubmit={handleSubmit}>
        <Form>
            <Grid container spacing= {2}>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                    <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >Requests</Typography>

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default RequestForm;