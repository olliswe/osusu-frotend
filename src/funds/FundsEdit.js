import {Edit, SimpleForm, NumberInput} from "react-admin";
import React from "react";

const FundsEdit = (props) => (
    <Edit {...props}>
        <SimpleForm
            redirect={'list'}
        >
            <NumberInput label="Actual Amount (SLL)" source="actual_amount" step={0.01}/>
        </SimpleForm>
    </Edit>
);

export default FundsEdit