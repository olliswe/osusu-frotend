import {BooleanInput, Edit, SimpleForm, TextInput} from "react-admin";
import React from "react";
import TricyclesTitle from "./TricyclesTitle";


const TricyclesEdit = (props) => (
    <Edit title={<TricyclesTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="full_name" />
            <BooleanInput source="maintenance" />
        </SimpleForm>
    </Edit>
);
export default TricyclesEdit