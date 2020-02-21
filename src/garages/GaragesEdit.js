import {BooleanInput, Edit, SimpleForm} from "react-admin";
import React from "react";
import GarageTitle from "./GaragesTitle";

const GarageEdit = (props) => (
    <Edit title={<GarageTitle />} {...props}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export default GarageEdit