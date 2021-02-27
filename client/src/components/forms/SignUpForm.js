import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from '../controls/Controls';
import { useForm, Form } from '../hooks/useForm';


const accountTypes = [
    { id: 'personal', title: 'Personal' },
    { id: 'organization', title: 'Organization' },
    { id: 'business', title: 'Business'},
]

const initialFValues = {
    fullName: '',
    email: '',
    occupation: '',
    type:'',
    address: '',
    bio:'',
    image:'',
    dataOfBirth: new Date(),
    isDonor: false,
}

export default function EmployeeForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? (fieldValues.email ? "" : "This field is required.") : "Email is not valid."
        if ('occupation' in fieldValues)
            temp.occupation = fieldValues.occupation.length > 9 ? "" : "Minimum 10 numbers required."
        if ('type' in fieldValues)
            temp.type = fieldValues.type.length != 0 ? "" : "This field is required."
        if ('address' in fieldValues)
            temp.address = fieldValues.address ? "" : "This field is required."
        if ('bio' in fieldValues)
            temp.bio = fieldValues.bio ? "" : "This field is required."
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
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Occupation"
                        name="occupation"
                        value={values.occupation}
                        onChange={handleInputChange}
                        error={errors.occupation}
                    />
                    <Controls.Input
                        label="Address"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                        error={errors.address}
                    />
                    <Controls.Input
                        label="Bio"
                        name="bio"
                        value={values.bio}
                        onChange={handleInputChange}
                        error={errors.bio}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name="type"
                        label="Account Type"
                        value={values.type}
                        onChange={handleInputChange}
                        options={accountTypes}
                        error={errors.type}
                    />
                    <Controls.DatePicker
                        name="dateOfBirth"
                        label="Date of Birth"
                        value={values.dataOfBirth}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="isDonor"
                        label="I am a donator"
                        value={values.isDonor}
                        onChange={handleInputChange}
                    />

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
