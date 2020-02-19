import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField,BooleanField,EditButton, TextInput, DateInput, BooleanInput } from 'react-admin';


export const GarageList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

const GarageTitle = ({ record }) => {
    return <span> {record ? `"${record.name}"` : ''}</span>;
};

export const GarageEdit = (props) => (
    <Edit title={<GarageTitle />} {...props}>
        <SimpleForm>
            <BooleanInput source="maintenance" />
        </SimpleForm>
    </Edit>
);

export const GarageCreate = (props) => (
    <Create title="Create a Garage" {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);