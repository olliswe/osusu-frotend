import {Datagrid, Filter, List, TextField, TextInput} from "react-admin";
import React from "react";


const GarageFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Name" source="name" alwaysOn />
    </Filter>
);

const GarageList = (props) => (
    <List {...props} filters={<GarageFilter/>} sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid rowClick="show" >
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="total_num_approved_claims" label="Total number of Approved Claims" sortable={false}/>
            <TextField source="total_num_open_claims" label="Total number of Open Claims" sortable={false}/>
            <TextField source="total_num_approved_not_paid_claims" label="Total number of Approved & Not Paid Claims" sortable={false}/>
        </Datagrid>
    </List>
);

export default GarageList