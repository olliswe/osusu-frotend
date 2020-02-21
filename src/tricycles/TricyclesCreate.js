import {Create, DateInput, SimpleForm, TextInput} from "react-admin";
import React from "react";

const TricyclesCreate = (props) => (
    <Create title="Create a Tricycle" {...props}>
        <SimpleForm>
            <TextInput source="full_name" />
            <DateInput source="start_date" />
        </SimpleForm>
    </Create>
);

export default TricyclesCreate
