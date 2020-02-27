import {TextInput, Edit, SimpleForm, NumberInput} from "react-admin";
import React from "react";
import PartsTitle from "./PartsTitle";

const PartsEdit = (props) => (
    <Edit title={<PartsTitle />} {...props}>
        <SimpleForm
            redirect={'list'}
        >
            <TextInput source="name" />
            <NumberInput label="Part Value (SLL)" source="value" step={0.01}/>
        </SimpleForm>
    </Edit>
);

export default PartsEdit