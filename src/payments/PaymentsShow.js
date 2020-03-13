import React from 'react';
import {Show, SimpleShowLayout, DateField, NumberField} from 'react-admin';
import {TricycleLinkField} from "../tricycles";

const PaymentsShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TricycleLinkField label="Claim made by Tricycle"/>
            <NumberField
                source="amount"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
            />
            <DateField source="date" locales="fr-FR"/>
        </SimpleShowLayout>
    </Show>
);

export default PaymentsShow