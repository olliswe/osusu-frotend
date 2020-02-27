import {Edit, SimpleForm} from "react-admin";
import React from "react";
import PaymentsTitle from "./PaymentsTitle";

const PaymentsEdit = (props) => (
    <Edit title={<PaymentsTitle />} {...props}>
        <SimpleForm>

        </SimpleForm>
    </Edit>
);

export default PaymentsEdit