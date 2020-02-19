import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField,ReferenceInput, DateInput, NumberInput, SelectInput, } from 'react-admin';


export const ClaimsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="tricycle" />
            <TextField source="garage" />
            <TextField source="status" />
        </Datagrid>
    </List>
);

const ClaimTitle = ({ record }) => {
    return <span> {record ? `Claim by "${record.tricycle}"` : ''}</span>;
};

export const ClaimEdit = (props) => (
    <Edit title={<ClaimTitle />} {...props}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export const ClaimCreate = (props) => (
    <Create title="To create a Claim, please first specify the Tricycle and Garage..." {...props}>
        <SimpleForm>
            <ReferenceInput label="Tricycle" source="tricycle" reference="tricycles" validate={['required']}>
                <SelectInput optionText="full_name" />
            </ReferenceInput>
            <ReferenceInput label="Garage" source="garage" reference="garages" validate={['required']}>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);