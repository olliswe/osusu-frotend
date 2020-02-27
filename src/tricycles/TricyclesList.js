import {BooleanField, Datagrid, List, TextField,NumberField,Filter, TextInput} from "react-admin";
import React from "react";

const TricycleFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Name" source="full_name" alwaysOn />
    </Filter>
);

const TricyclesList = (props) => (
    <List {...props} filters={<TricycleFilter/>}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="full_name" />
            <BooleanField source="maintenance" />
            <BooleanField source="waiting_period" label="Completed Waiting Period"
            sortable={false}
            />
            <NumberField
                source="total_value_of_payments_made"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
                label="Total value of payments made"
                sortable={false}
            />
            <BooleanField source="payments_up_to_date"
            sortable={false}
            />
        </Datagrid>
    </List>
);


export default TricyclesList