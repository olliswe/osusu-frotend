import {Datagrid, EditButton, List, NumberField, TextField, DateField, SelectInput, Filter, TextInput} from "react-admin";
import React from "react";
import {TricycleLinkField} from "../tricycles";
import {GarageLinkField} from "../garages";


const SearchFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Garage Name" source="garage__name__icontains" alwaysOn/>
        <TextInput label="Search Tricycle Name" source="tricycle__full_name__icontains"  alwaysOn/>
        <SelectInput source="status" choices={[
            { id: 'Open', name: 'Open' },
            { id: 'Approved', name: 'Approved' },
            { id: 'Approved & Paid', name: 'Approved & Paid' },
            { id: 'Rejected', name: 'Rejected' },
        ]} alwaysOn/>
    </Filter>
);

const ClaimsList = (props) => (
    <List {...props} sort={{ field: 'date', order: 'DESC' }} filters={<SearchFilter/>}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TricycleLinkField label="Tricycle"/>
            <GarageLinkField label="Garage"/>
            <DateField source="date" locales="fr-FR"/>
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