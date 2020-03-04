import {Datagrid, EditButton, List, NumberField, TextField, DateField, Tab} from "react-admin";
import React from "react";
import {TricycleLinkField} from "../tricycles";
import {GarageLinkField} from "../garages";

const ClaimsList = (props) => (
    <List {...props} sort={{ field: 'date', order: 'DESC' }}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TricycleLinkField label="Tricycle"/>
            <GarageLinkField label="Garage"/>
            <DateField source="date"/>
            <NumberField
                source="total_value"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
                label="Total value"
                sortable={false}
            />
            <TextField source="status" label='Status'/>
            <EditButton label="Edit Status"/>
        </Datagrid>
    </List>
);

export default ClaimsList