import {Datagrid, DateField, List, TextField, NumberField, Filter, TextInput} from "react-admin";
import React from "react";
import {TricycleLinkField} from "../tricycles";


const TricycleNameFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Tricycle" source="tricycle.full_name" alwaysOn />
    </Filter>
);


const PaymentsList = (props) => (
    <List {...props} sort={{ field: 'date', order: 'DESC' }} filters={<TricycleNameFilter/>}>
        <Datagrid rowClick="show">
            <TricycleLinkField label="Tricycle"/>
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