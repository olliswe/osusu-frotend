import {BooleanField, Datagrid, List, TextField} from "react-admin";
import React from "react";

const TricyclesList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="full_name" />
            <BooleanField source="maintenance" />
            <BooleanField source="waiting_period" label="Completed Waiting Period" />
            <TextField source="total_value_of_payments_made_formatted" label="Total value of payments made"/>
            <BooleanField source="payments_up_to_date"/>
        </Datagrid>
    </List>
);


export default TricyclesList