import {Create, NumberInput, TextInput , SimpleForm} from "react-admin";
import React from "react";

const PartsCreate = (props) => (
    <Create title="Add a Part" {...props}>
        <SimpleForm>
            <TextInput label="Name" source="name"/>
            <NumberInput label="Part Value (SLL)" source="value" step={0.01}/>
        </SimpleForm>
    </Create>
);

export default PartsCreate