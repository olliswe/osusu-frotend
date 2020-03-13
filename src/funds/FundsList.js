import {Datagrid, List, NumberField} from "react-admin";
import React from "react";

const FundsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField
                source="actual_amount"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
            />
            <NumberField
                source="required_amount"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
                label="Required Amount"
            />
            <NumberField
                source="total_available_amount_month"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
                label="Total Available Amount this Month"
            />
            <NumberField
                source="remaining_available_amount_month"
                options={{
                    style: 'currency',
                    currency: 'SLL',
                }}
                label="Remaining Amount Available this Month"
            />

        </Datagrid>
    </List>
);

export default FundsList