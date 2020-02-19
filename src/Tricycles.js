import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField,BooleanField,EditButton, TextInput, DateInput, BooleanInput } from 'react-admin';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';


export const TricycleList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="full_name" />
            <DateField source="start_date" />
            <BooleanField source="maintenance" />
        </Datagrid>
    </List>
);

const TricycleTitle = ({ record }) => {
    return <span> {record ? `"${record.full_name}"` : ''}</span>;
};

export const TricycleEdit = (props) => (
    <Edit title={<TricycleTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="full_name" />
            <BooleanInput source="maintenance" />
        </SimpleForm>
    </Edit>
);

export const TricycleCreate = (props) => (
    <Create title="Create a Tricycle" {...props}>
        <SimpleForm>
            <TextInput source="full_name" />
            <DateInput source="start_date" />
        </SimpleForm>
    </Create>
);