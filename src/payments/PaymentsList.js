import {Datagrid, DateField, List, TextField} from "react-admin";
import React from "react";

const PaymentsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="tricycle" />
            <TextField source="amount" />
            <DateField source="date" />
        </Datagrid>
    </List>
);

export default PaymentsList