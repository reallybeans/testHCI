import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'
import Icon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

export const VisitorIcon = Icon;
// The `Datagrid` component uses makeStyles, and supports overriding styles through the `classes` property 
const useStyles = makeStyles({
    table: {
        backgroundColor: 'Lavender',
    },
    headerCell: {
        backgroundColor: 'MistyRose',
    },
});
const UserList = (props) => {
    const classes = useStyles();
    return (
        <List classes={classes} {...props}>
            <Datagrid>
                <TextField disabled source="id" />
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="role" />
                <TextField source="status" />
                <EditButton basePath="/user" />
                <DeleteButton basePath="/user" />
            </Datagrid>
        </List>
    )
}
export default UserList;
