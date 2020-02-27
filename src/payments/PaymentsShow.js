import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, NumberField } from 'react-admin';

const PaymentsShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="tricycle.full_name" label='Tricycle' />
            <NumberField
                source="amount"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
            />
            <DateField source="date" />
        </SimpleShowLayout>
    </Show>
);

export default PaymentsShow