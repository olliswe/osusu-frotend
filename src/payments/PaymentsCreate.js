import {Create, DateInput, NumberInput, ReferenceInput, SelectInput, SimpleForm} from "react-admin";
import React from "react";

const PaymentsCreate = (props) => (
    <Create title="Add a Payment" {...props}>
        <SimpleForm>
            <ReferenceInput label="Tricycle" source="tricycle" reference="tricycles" validate={['required']}>
                <SelectInput optionText="full_name" />
            </ReferenceInput>
            <NumberInput label="Amount (SLL)" source="amount" step={0.01}/>
            <DateInput label="Payment Date" source="date"/>
        </SimpleForm>
    </Create>
);

export default PaymentsCreate