import {Datagrid, DateField, List, TextField, NumberField} from "react-admin";
import React from "react";

const PaymentsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="tricycle.full_name" label='Tricycle' />
            <NumberField
                source="amount"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
            />
            <DateField source="date" />
        </Datagrid>
    </List>
);

export default PaymentsList