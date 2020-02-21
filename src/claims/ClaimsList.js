import {Datagrid, EditButton, List, NumberField, TextField} from "react-admin";
import React from "react";

const ClaimsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="tricycle.full_name" label='Tricycle'/>
            <TextField source="garage.name" label='Garage'/>
            <TextField source="total_value" label='Total Value'/>
            <TextField source="status" label='Status'/>
            <EditButton label="Edit Status"/>
        </Datagrid>
    </List>
);

export default ClaimsList