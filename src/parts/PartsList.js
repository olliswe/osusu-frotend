import {Datagrid, List, NumberField, TextField} from "react-admin";
import React from "react";

const PartsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <NumberField
                source="value"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
            />
        </Datagrid>
    </List>
);

export default PartsList