import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField,ReferenceInput, DateInput, NumberInput, SelectInput, } from 'react-admin';


export const PaymentsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="tricycle" />
            <TextField source="amount" />
            <DateField source="date" />
        </Datagrid>
    </List>
);

const PaymentTitle = ({ record }) => {
    return <span> {record ? `Payment by "${record.tricycle}"` : ''}</span>;
};

export const PaymentEdit = (props) => (
    <Edit title={<PaymentTitle />} {...props}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export const PaymentCreate = (props) => (
    <Create title="Add a Payment" {...props}>
        <SimpleForm>
            <ReferenceInput label="Tricycle" source="tricycle" reference="tricycles" validate={['required']}>
                <SelectInput optionText="full_name" />
            </ReferenceInput>
            <NumberInput label="Amount (SLL)" source="amount" step={0.01}/>
            <DateInput label="Payment Date" source="date"/>
        </SimpleForm>
    </Create>
);