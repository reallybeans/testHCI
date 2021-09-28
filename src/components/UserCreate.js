import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const UserCreate = (props) => {
    return (
        <Create title="Create a User" {...props} >
            <SimpleForm>
                <TextInput source="title" />
                <TextInput multiline source="body" />
                <DateInput label="Published" source="publisedtAt" />
            </SimpleForm>
        </Create >
    )
}
export default UserCreate