import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const Useredit = (props) => {
    return (
        <Edit title="Edit User" {...props}>
            <SimpleForm >
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="email" />
                <TextInput source="role" />
                <TextInput source="status" />
            </SimpleForm>
        </Edit>
    )
}
export default Useredit