import {Create, SimpleForm, TextInput} from "react-admin";
import React from "react";

const GarageCreate = (props) => (
    <Create title="Create a Garage" {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default GarageCreate