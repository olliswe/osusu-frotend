import {Edit, SelectInput, SimpleForm} from "react-admin";
import React from "react";
import {ClaimsTitle} from "./ClaimsTitle";

const ClaimsEdit = (props) => (
    <Edit title={<ClaimsTitle />} {...props}>
        <SimpleForm>
            <SelectInput source="status" choices={[
                { id: 'Open', name: 'Open' },
                { id: 'Approved', name: 'Approved' },
                { id: 'Approved & Paid', name: 'Approved & Paid' },
                { id: 'Rejected', name: 'Rejected' },
            ]} />
        </SimpleForm>
    </Edit>
);

export default ClaimsEdit