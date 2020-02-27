import {Datagrid, EditButton, List, NumberField, TextField, DateField} from "react-admin";
import React from "react";

const ClaimsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="tricycle.full_name" label='Tricycle'/>
            <TextField source="garage.name" label='Garage'/>
            <DateField source="date"/>
            <NumberField
                source="total_value"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
                label="Total value"
            />
            <TextField source="status" label='Status'/>
            <EditButton label="Edit Status"/>
        </Datagrid>
    </List>
);

export default ClaimsList