import {Datagrid, List, TextField} from "react-admin";
import React from "react";

const GarageList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="total_num_approved_claims" label="Total number of Approved Claims" />
            <TextField source="total_num_open_claims" label="Total number of Open Claims" />
            <TextField source="total_num_approved_not_paid_claims" label="Total number of Approved & Not Paid Claims" />
        </Datagrid>
    </List>
);

export default GarageList