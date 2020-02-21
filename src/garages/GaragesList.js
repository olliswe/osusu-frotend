import {Datagrid, List, TextField} from "react-admin";
import React from "react";

const GarageList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

export default GarageList